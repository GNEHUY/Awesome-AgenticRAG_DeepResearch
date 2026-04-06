// DOM Elements
const papersContainer = document.getElementById('papers-container');
const paperCount = document.getElementById('paper-count');
const searchInput = document.getElementById('search-input');
const searchCount = document.getElementById('search-count');
const statsDashboard = document.getElementById('stats-dashboard');
const tagFilters = document.getElementById('tag-filters');

// State
let activeYearFilter = 'all';
let activeSearchQuery = '';
let activeTags = [];
let intersectionObserver = null;

// === Initialization ===
document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderYearNav();
    renderTagFilters();
    renderPapers();
    setupEventListeners();
    initScrollAnimation();
});

// === Stats Dashboard ===
function renderStats() {
    const total = papers.length;
    const hasCode = papers.filter(p => p.codeLinks.length > 0).length;
    const hasDataset = papers.filter(p => p.datasetLinks.length > 0).length;
    const openCount = papers.filter(p => p.tags.includes('Open-Source')).length;

    const allYears = papers.map(p => p.year);
    const minYear = Math.min(...allYears);
    const maxYear = Math.max(...allYears);

    statsDashboard.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">${total}</div>
            <div class="stat-label">Papers</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${hasCode}</div>
            <div class="stat-label">Open Code</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${hasDataset}</div>
            <div class="stat-label">Datasets</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${minYear}–${maxYear}</div>
            <div class="stat-label">Year Span</div>
        </div>
    `;
}

// === Tag Filters ===
// === Year Navigation ===
function renderYearNav() {
    const years = [...new Set(papers.map(p => p.year))].sort((a, b) => b - a);
    const placeholder = document.getElementById('year-nav-placeholder');
    placeholder.innerHTML = years.map(y =>
        `<a href="#" class="nav-link" data-filter="${y}">${y}</a>`
    ).join('');
}

// === Tag Filters ===
function renderTagFilters() {
    const tagCounts = {};
    papers.forEach(p => {
        p.tags.forEach(t => {
            tagCounts[t] = (tagCounts[t] || 0) + 1;
        });
    });

    let html = '';
    for (const [category, tagList] of Object.entries(tagCategories)) {
        catLabel = category === 'methods' ? 'method' : category === 'tasks' ? 'task' : 'feature';
        html += `<span class="tag-section-label">${category}</span>`;
        tagList.forEach(tag => {
            const count = tagCounts[tag] || 0;
            html += `<span class="tag-chip" data-tag="${tag}" data-cat="${catLabel}">${tag} (${count})</span>`;
        });
    }
    tagFilters.innerHTML = html;

    // Setup tag click listeners
    tagFilters.querySelectorAll('.tag-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const tag = chip.dataset.tag;
            if (activeTags.includes(tag)) {
                activeTags = activeTags.filter(t => t !== tag);
                chip.classList.remove('active');
            } else {
                activeTags.push(tag);
                chip.classList.add('active');
            }
            renderPapers();
        });
    });
}

// === Get Filtered Papers ===
function getFilteredPapers() {
    let filtered = papers;

    // Year filter
    if (activeYearFilter !== 'all') {
        filtered = filtered.filter(p => p.year === parseInt(activeYearFilter));
    }

    // Search filter
    if (activeSearchQuery) {
        const query = activeSearchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }

    // Tag filter
    if (activeTags.length > 0) {
        filtered = filtered.filter(p =>
            activeTags.some(t => p.tags.includes(t))
        );
    }

    return filtered;
}

// === Render Papers ===
function renderPapers() {
    const filtered = getFilteredPapers();

    // Group by year, then month
    const grouped = {};
    filtered.forEach(paper => {
        const year = paper.year;
        const month = paper.date; // e.g. "2025.01"
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(paper);
    });

    // Sort years descending, preserve month order
    const years = Object.keys(grouped).sort((a, b) => b - a);

    if (years.length === 0) {
        papersContainer.innerHTML = '<div class="empty-state" style="text-align:center;padding:48px;color:var(--color-text-muted)">No papers found</div>';
    } else {
        let html = '';
        years.forEach(year => {
            const papersOfYear = grouped[year];
            html += `
                <div class="year-group">
                    <div class="year-header">
                        <span class="year-label">${year}</span>
                        <span class="year-count">${papersOfYear.length} papers</span>
                        <div class="year-line"></div>
                    </div>`;

            // Group by month
            const months = {};
            papersOfYear.forEach(p => {
                if (!months[p.date]) months[p.date] = [];
                months[p.date].push(p);
            });

            Object.entries(months).forEach(([month, monthPapers]) => {
                const [y, m] = month.split('.');
                const monthName = formatDate(new Date(parseInt(y), parseInt(m) - 1));
                html += `<div class="month-header">${monthName}</div>`;
                monthPapers.forEach(paper => {
                    html += createPaperCard(paper);
                });
            });

            html += `</div>`;
        });
        papersContainer.innerHTML = html;
    }

    // Update count
    paperCount.textContent = `${filtered.length}${filtered.length !== papers.length ? ' / ' + papers.length : ''} papers`;

    // Update search count
    if (activeSearchQuery) {
        searchCount.textContent = `${filtered.length} results`;
    } else {
        searchCount.textContent = '';
    }

    // Re-observe cards for scroll animation
    initScrollAnimation();
}

// === Create Paper Card HTML ===
function createPaperCard(paper) {
    const tagsHtml = paper.tags.map(tag => {
        const cat = getTagCategory(tag);
        return `<span class="paper-tag tag-${cat}">${tag}</span>`;
    }).join('');

    let linksHtml = `
        <a href="${paper.url}" class="paper-link-btn" target="_blank">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Paper
        </a>`;

    paper.codeLinks.forEach(link => {
        linksHtml += `
            <a href="${link}" class="paper-link-btn code-btn" target="_blank">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Code
            </a>`;
    });

    paper.datasetLinks.forEach(link => {
        const isHF = link.includes('huggingface');
        linksHtml += `
            <a href="${link}" class="paper-link-btn dataset-btn" target="_blank">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 7h16M4 12h16M4 17h16"/>
                </svg>
                ${isHF ? 'HuggingFace' : 'Dataset'}
            </a>`;
    });

    return `
        <article class="paper-card">
            <div class="paper-header">
                <span class="paper-date">${paper.date}</span>
                <h2 class="paper-title">
                    <a href="${paper.url}" target="_blank">${paper.title}</a>
                </h2>
            </div>
            <p class="paper-abstract" onclick="this.classList.toggle('expanded')">${paper.description}</p>
            <div class="paper-tags">${tagsHtml}</div>
            <div class="paper-links">${linksHtml}</div>
        </article>
    `;
}

// === Event Listeners ===
function setupEventListeners() {
    // Year filter nav links
    document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.dataset.filter;
            if (filter === 'all' || /^\d{4}$/.test(filter)) {
                activeYearFilter = filter;
                document.querySelectorAll('.nav-link[data-filter]').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                renderPapers();
            }
        });
    });

    // Search input
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            activeSearchQuery = searchInput.value.trim();
            renderPapers();
        }, 200);
    });
}

// === Scroll Animation ===
function initScrollAnimation() {
    if (intersectionObserver) {
        intersectionObserver.disconnect();
    }

    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                intersectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.paper-card:not(.visible)').forEach(card => {
        intersectionObserver.observe(card);
    });
}

// === Helpers ===
function getTagCategory(tag) {
    if (tagCategories.methods.includes(tag)) return 'method';
    if (tagCategories.tasks.includes(tag)) return 'task';
    if (tagCategories.features.includes(tag)) return 'feature';
    return 'method';
}

function formatDate(date) {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
