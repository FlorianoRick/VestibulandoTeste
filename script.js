const vestibulares = [
  {
    id: 1,
    nome: 'Fuvest',
    instituicao: 'USP',
    estado: 'SP',
    curso: 'Engenharia',
    status: 'abertas',
    inscricoes: '18/09/2026',
    prova: '22/11/2026',
    valor: 'R$ 180,00',
    modalidade: 'Presencial',
    tipo: 'Universitária',
  },
  {
    id: 2,
    nome: 'Unicamp',
    instituicao: 'UNICAMP',
    estado: 'SP',
    curso: 'Medicina',
    status: 'proximas',
    inscricoes: '30/09/2026',
    prova: '07/12/2026',
    valor: 'R$ 140,00',
    modalidade: 'Presencial',
    tipo: 'Universitária',
  },
  {
    id: 3,
    nome: 'Unesp',
    instituicao: 'UNESP',
    estado: 'SP',
    curso: 'Direito',
    status: 'abertas',
    inscricoes: '05/09/2026',
    prova: '12/10/2026',
    valor: 'R$ 120,00',
    modalidade: 'Presencial',
    tipo: 'Estadual',
  },
  {
    id: 4,
    nome: 'UFPR',
    instituicao: 'UFPR',
    estado: 'PR',
    curso: 'Arquitetura',
    status: 'abertas',
    inscricoes: '12/09/2026',
    prova: '03/10/2026',
    valor: 'Gratuito',
    modalidade: 'Presencial',
    tipo: 'Federal',
  },
  {
    id: 5,
    nome: 'ENEM',
    instituicao: 'INEP',
    estado: 'Brasil',
    curso: 'Todos',
    status: 'proximas',
    inscricoes: '20/11/2026',
    prova: '14/12/2026',
    valor: 'Gratuito',
    modalidade: 'On-line + Papel',
    tipo: 'Nacional',
  },
  {
    id: 6,
    nome: 'FATEC',
    instituicao: 'FATEC',
    estado: 'SP',
    curso: 'Tecnologia',
    status: 'fechadas',
    inscricoes: '07/08/2026',
    prova: '19/09/2026',
    valor: 'R$ 90,00',
    modalidade: 'Presencial',
    tipo: 'Tecnológica',
  },
];

const provas = [
  {
    instituicao: 'USP',
    processo: 'Fuvest',
    ano: 2025,
    tipo: 'Redação + Matemática',
    disciplina: 'Matemática',
    pdf: '#',
    gabarito: '#',
  },
  {
    instituicao: 'UNESP',
    processo: 'Vestibular',
    ano: 2025,
    tipo: 'Linguagens',
    disciplina: 'Português',
    pdf: '#',
    gabarito: '#',
  },
  {
    instituicao: 'UNICAMP',
    processo: 'Vestibular',
    ano: 2024,
    tipo: 'Ciências da Natureza',
    disciplina: 'Química',
    pdf: '#',
    gabarito: '#',
  },
  {
    instituicao: 'UFPR',
    processo: 'Vestibular',
    ano: 2024,
    tipo: 'Biologia',
    disciplina: 'Biologia',
    pdf: '#',
    gabarito: '#',
  },
  {
    instituicao: 'IFSP',
    processo: 'Vestibular',
    ano: 2025,
    tipo: 'Tecnologia',
    disciplina: 'Física',
    pdf: '#',
    gabarito: '#',
  },
  {
    instituicao: 'UNB',
    processo: 'Vestibular',
    ano: 2025,
    tipo: 'Humanas',
    disciplina: 'História',
    pdf: '#',
    gabarito: '#',
  },
];

const materias = [
  {
    nome: 'Matemática',
    items: ['Álgebra', 'Geometria', 'Estatística', 'Trigonometria'],
  },
  {
    nome: 'Física',
    items: ['Mecânica', 'Eletrostática', 'Ondulatória', 'Termodinâmica'],
  },
  {
    nome: 'Química',
    items: ['Química Orgânica', 'Estequiometria', 'Termoquímica', 'Reações'],
  },
  {
    nome: 'Biologia',
    items: ['Genética', 'Ecologia', 'Anatomia', 'Botânica'],
  },
  {
    nome: 'História',
    items: ['Brasil Império', 'Revolução', 'Idade Contemporânea', 'História Mundial'],
  },
  {
    nome: 'Português',
    items: ['Interpretação', 'Linguagem', 'Literatura', 'Redação'],
  },
];

const comparativo = [
  ['Matemática', 'Sim', 'Sim', 'Forte'],
  ['Física', 'Não', 'Sim', 'Sim'],
  ['Química', 'Sim', 'Sim', 'Sim'],
  ['Biologia', 'Não', 'Sim', 'Forte'],
  ['História', 'Sim', 'Sim', 'Sim'],
  ['Português', 'Sim', 'Sim', 'Sim'],
  ['Redação', 'Sim', 'Sim', 'Sim'],
];

const planejamento = [
  {
    titulo: 'Fase 1 — Base',
    descricao: 'Consolidar conteúdo essencial e revisar gramática, matemática e conceitos básicos.',
    prazo: '4 semanas',
  },
  {
    titulo: 'Fase 2 — Simulados',
    descricao: 'Realizar provas antigas, medir desempenho e ajustar foco por disciplina.',
    prazo: '3 semanas',
  },
  {
    titulo: 'Fase 3 — Intensivo',
    descricao: 'Reforçar redação e temas recorrentes para reduzir erros e aumentar desempenho.',
    prazo: '2 semanas',
  },
];

const instituicoes = [
  { nome: 'USP', local: 'São Paulo', tipo: 'Federal', cursos: 120 },
  { nome: 'UNICAMP', local: 'Campinas', tipo: 'Estadual', cursos: 90 },
  { nome: 'UNESP', local: 'São Paulo', tipo: 'Estadual', cursos: 78 },
  { nome: 'UFPR', local: 'Curitiba', tipo: 'Federal', cursos: 70 },
  { nome: 'UNB', local: 'Brasília', tipo: 'Federal', cursos: 58 },
  { nome: 'IFSP', local: 'São Paulo', tipo: 'Federal', cursos: 40 },
];

const noticias = [
  {
    titulo: 'Novos editais de 2026 já começam a ser publicados',
    data: '08 set 2026',
    resumo: 'Instituições estão divulgando cronogramas e regras de inscrição para o próximo ciclo.',
  },
  {
    titulo: 'Comparativo de conteúdos do ENEM e vestibulares é atualizado',
    data: '06 set 2026',
    resumo: 'A plataforma adicionou novos pesos por disciplina para estudantes que fazem mais de um processo.',
  },
  {
    titulo: 'Provas recentes repartem oportunidades em áreas de tecnologia',
    data: '03 set 2026',
    resumo: 'Muitas universidades ampliaram vagas e critérios de classificação neste semestre.',
  },
];

const eventos = [
  { dia: 4, mes: 'Set', nome: 'Prazo de isenção FATEC', tipo: 'Isenção' },
  { dia: 9, mes: 'Set', nome: 'Inscrições Fuvest', tipo: 'Inscrição' },
  { dia: 12, mes: 'Set', nome: 'Prova Unesp', tipo: 'Prova' },
  { dia: 16, mes: 'Set', nome: 'Resultado UFPR', tipo: 'Resultado' },
  { dia: 20, mes: 'Set', nome: 'Simulado ENEM', tipo: 'Evento' },
  { dia: 29, mes: 'Set', nome: 'Conflito: prova Unicamp + Unesp', tipo: 'Conflito' },
];

const renderVestibulares = () => {
  const grid = document.getElementById('vestibularesGrid');
  const state = document.getElementById('filterState').value;
  const institution = document.getElementById('filterInstitution').value;
  const sortBy = document.getElementById('sortBy').value;

  let filtered = vestibulares.filter((vest) => {
    const byState = state === 'todos' || vest.estado === state || vest.estado === 'Brasil';
    const byInstitution = institution === 'todas' || vest.instituicao === institution;
    return byState && byInstitution;
  });

  if (sortBy === 'inscricao') {
    filtered = [...filtered].sort((a, b) => new Date(a.inscricoes) - new Date(b.inscricoes));
  }

  if (sortBy === 'prova') {
    filtered = [...filtered].sort((a, b) => new Date(a.prova) - new Date(b.prova));
  }

  if (sortBy === 'instituicao') {
    filtered = [...filtered].sort((a, b) => a.instituicao.localeCompare(b.instituicao));
  }

  grid.innerHTML = filtered
    .map((vest) => {
      const badgeClass = vest.status === 'abertas' ? 'badge-open' : vest.status === 'proximas' ? 'badge-soon' : 'badge-closed';
      const badgeLabel =
        vest.status === 'abertas' ? 'Inscrições abertas' : vest.status === 'proximas' ? 'Próximas' : 'Fechadas';

      return `
        <article class="card">
          <div class="card-top">
            <span class="card-badge ${badgeClass}">${badgeLabel}</span>
            <span class="price">${vest.valor}</span>
          </div>
          <h3>${vest.nome}</h3>
          <div class="card-meta">
            <div><span>Instituição</span><strong>${vest.instituicao}</strong></div>
            <div><span>Curso</span><strong>${vest.curso}</strong></div>
            <div><span>Modalidade</span><strong>${vest.modalidade}</strong></div>
            <div><span>Inscrição</span><strong>${vest.inscricoes}</strong></div>
            <div><span>Prova</span><strong>${vest.prova}</strong></div>
          </div>
          <div class="card-footer">
            <span class="type">${vest.tipo}</span>
            <button class="card-button">Detalhes</button>
          </div>
        </article>
      `;
    })
    .join('');
};

const renderCalendar = () => {
  const calendarGrid = document.getElementById('calendarGrid');
  const eventList = document.getElementById('eventList');

  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const cells = Array.from({ length: 35 }, (_, index) => {
    const day = index - 2;
    const isInRange = day >= 1 && day <= 30;
    const currentDay = day === 9;
    const hasConflict = eventos.some((event) => event.dia === day);

    return `
      <div class="calendar-cell ${currentDay ? 'today' : ''} ${hasConflict ? 'conflict' : ''}">
        <span class="day-number">${isInRange ? day : ''}</span>
        ${hasConflict ? '<small>• eventos</small>' : ''}
      </div>
    `;
  });

  calendarGrid.innerHTML = weekdays
    .map((day) => `<div class="calendar-day name">${day}</div>`)
    .join('') + cells.join('');

  eventList.innerHTML = `
    <div class="event-list">
      ${eventos
        .map(
          (event) => `
            <article class="event-item">
              <div class="event-date">
                <strong>${event.dia}</strong>
                <span>${event.mes}</span>
              </div>
              <div class="event-info">
                <h4>${event.nome}</h4>
                <p>${event.tipo}</p>
              </div>
            </article>
          `
        )
        .join('')}
    </div>
  `;
};

const renderProvas = () => {
  const grid = document.getElementById('provasGrid');
  const query = document.getElementById('examSearch').value.toLowerCase();

  const filtered = provas.filter(({ instituicao, processo, disciplina }) => {
    const itemText = `${instituicao} ${processo} ${disciplina}`.toLowerCase();
    return itemText.includes(query);
  });

  grid.innerHTML = filtered
    .map(
      (prova) => `
        <article class="exam-card">
          <div class="exam-top">
            <span class="card-badge badge-open">${prova.ano}</span>
            <span class="type">${prova.tipo}</span>
          </div>
          <h3>${prova.instituicao}</h3>
          <div class="exam-meta">
            <div><span>Processo</span><strong>${prova.processo}</strong></div>
            <div><span>Disciplina</span><strong>${prova.disciplina}</strong></div>
          </div>
          <div class="exam-footer">
            <a href="${prova.pdf}" class="card-button">PDF</a>
            <a href="${prova.gabarito}" class="card-button">Gabarito</a>
          </div>
        </article>
      `
    )
    .join('');
};

const renderMateriais = () => {
  const grid = document.getElementById('disciplinasGrid');
  const tableBody = document.getElementById('compareTableBody');

  grid.innerHTML = materias
    .map(
      (materia) => `
        <article class="subject-card">
          <strong>${materia.nome}</strong>
          <ul>
            ${materia.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');

  tableBody.innerHTML = comparativo
    .map(
      (linha) => `
        <tr>
          <td>${linha[0]}</td>
          <td>${linha[1]}</td>
          <td>${linha[2]}</td>
          <td>${linha[3]}</td>
        </tr>
      `
    )
    .join('');
};

const renderPlan = () => {
  const grid = document.getElementById('planGrid');
  grid.innerHTML = planejamento
    .map(
      (etapa) => `
        <article class="plan-card">
          <span class="card-badge badge-soon">${etapa.prazo}</span>
          <strong>${etapa.titulo}</strong>
          <p>${etapa.descricao}</p>
        </article>
      `
    )
    .join('');
};

const renderInstituicoes = () => {
  const grid = document.getElementById('institutionsGrid');
  grid.innerHTML = instituicoes
    .map(
      (instituicao) => `
        <article class="institution-card">
          <span class="card-badge badge-open">${instituicao.tipo}</span>
          <strong>${instituicao.nome}</strong>
          <p>${instituicao.local}</p>
          <small>${instituicao.cursos} cursos</small>
        </article>
      `
    )
    .join('');
};

const renderNews = () => {
  const grid = document.getElementById('newsGrid');
  grid.innerHTML = noticias
    .map(
      (noticia) => `
        <article class="news-card">
          <div class="news-header">
            <span class="card-badge badge-soon">Atualização</span>
            <span class="news-meta">${noticia.data}</span>
          </div>
          <h3>${noticia.titulo}</h3>
          <p>${noticia.resumo}</p>
        </article>
      `
    )
    .join('');
};

document.getElementById('filterState').addEventListener('change', renderVestibulares);
document.getElementById('filterInstitution').addEventListener('change', renderVestibulares);
document.getElementById('sortBy').addEventListener('change', renderVestibulares);
document.getElementById('examSearch').addEventListener('input', renderProvas);
document.querySelector('.hero-search').addEventListener('submit', (event) => {
  event.preventDefault();
  const query = document.getElementById('quickSearch').value.toLowerCase();
  document.getElementById('filterState').value = 'todos';
  document.getElementById('filterInstitution').value = 'todas';
  const filtered = vestibulares.filter((vest) => {
    const phrase = `${vest.nome} ${vest.instituicao} ${vest.curso} ${vest.estado}`.toLowerCase();
    return phrase.includes(query);
  });

  const grid = document.getElementById('vestibularesGrid');
  grid.innerHTML = filtered
    .map(
      (vest) => `
        <article class="card">
          <div class="card-top">
            <span class="card-badge badge-open">${vest.status === 'abertas' ? 'Inscrições abertas' : 'Próximas'}</span>
            <span class="price">${vest.valor}</span>
          </div>
          <h3>${vest.nome}</h3>
          <div class="card-meta">
            <div><span>Instituição</span><strong>${vest.instituicao}</strong></div>
            <div><span>Curso</span><strong>${vest.curso}</strong></div>
            <div><span>Inscrição</span><strong>${vest.inscricoes}</strong></div>
          </div>
        </article>
      `
    )
    .join('');
});

renderVestibulares();
renderCalendar();
renderProvas();
renderMateriais();
renderPlan();
renderInstituicoes();
renderNews();
