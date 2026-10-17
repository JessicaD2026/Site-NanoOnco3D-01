export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  institution: string;
  specialty: string;
  bio: string;
  category: 'leadership' | 'scientific' | 'advisor';
  linkedin?: string;
  lattes?: string;
}

export interface Technology {
  id: string;
  title: string;
  badge?: string;
  status: 'consolidated' | 'development';
  summary: string;
  description: string;
  applications: string[];
  metrics?: { label: string; value: string }[];
}

export interface CircuitStep {
  id: string;
  name: string;
  role: string;
  detail: string;
  telemetry: string;
  parameters: { name: string; value: string }[];
}

export interface Solution {
  id: string;
  code: string;
  name: string;
  description: string;
  targetAudience: string;
  applications: string[];
}

export interface ApplicationArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  applications: string[];
  workflow?: { step: number; title: string; desc: string }[];
  regulatoryNote?: string;
}

export interface RoadmapMilestone {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'future';
  deliverables: string[];
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  author: string;
}

export interface PartnerOrg {
  name: string;
  role: string;
  category: 'scientific' | 'innovation' | 'collaboration';
}

export const nanooncoData = {
  pt: {
    hero: {
      tagline: 'DeepTech Brasileira em Biotecnologia & Medicina de Precisão',
      title: 'Tecnologias que aproximam a ciência de soluções para a vida.',
      subtitle:
        'Integramos cultivo celular 3D, microfluídica e tecnologias avançadas de monitoramento para desenvolver modelos biológicos inovadores e soluções personalizadas para pesquisa, indústria e saúde.',
      complement:
        'Da pesquisa experimental à inovação aplicada, conectamos biologia, engenharia e tecnologia para transformar desafios científicos em novas possibilidades terapêuticas e diagnósticas.',
      ctaPrimary: 'Conheça nossas tecnologias',
      ctaSecondary: 'Explore nossas soluções',
      ctaContact: 'Fale com nossos especialistas',
      stats: [
        { label: 'Modelos Translacionais', value: '3D & Organ-on-Chip' },
        { label: 'Origem Científica', value: 'Ecossistema UFF' },
        { label: 'Abordagem Integrada', value: 'One Health' },
        { label: 'Foco de Impacto', value: 'Saúde & Indústria' },
      ],
    },
    about: {
      sectionTitle: 'Quem Somos',
      title: 'Ciência, tecnologia e inovação conectadas para transformar o futuro da saúde.',
      lead:
        'A NanoOnco3D é uma DeepTech brasileira dedicada ao desenvolvimento de tecnologias avançadas para pesquisa biomédica, biotecnologia e medicina personalizada.',
      paragraphs: [
        'Nossa atuação integra conhecimentos de ponta em biologia celular, cultivo tridimensional, engenharia microfluídica e automação para desenvolver plataformas experimentais que ampliem as possibilidades de investigação científica, avaliação de ativos e desenvolvimento de novas soluções terapêuticas.',
        'Com origem no ecossistema científico da Universidade Federal Fluminense (UFF), buscamos transformar conhecimento científico em tecnologias aplicáveis à saúde humana, veterinária e aos diferentes segmentos da indústria química, cosmética e farmacêutica.',
      ],
      missionTitle: 'Missão',
      mission:
        'Desenvolver tecnologias biológicas e microfluídicas que contribuam para pesquisas mais relevantes, processos de inovação mais eficientes e decisões em saúde fundamentadas em evidências científicas.',
      visionTitle: 'Visão',
      vision:
        'Ser referência nacional e internacional em plataformas biotecnológicas integradas para pesquisa translacional, desenvolvimento de produtos e medicina personalizada.',
      valuesTitle: 'Valores Fundamentais',
      values: [
        { name: 'Rigor científico', desc: 'Compromisso com metodologia experimental estrita e reprodutibilidade.' },
        { name: 'Ética e responsabilidade', desc: 'Atuação transparente e respeito integral às normas éticas.' },
        { name: 'Inovação tecnológica', desc: 'Soluções autorais de engenharia microfluídica e bioengenharia.' },
        { name: 'Colaboração e interdisciplinaridade', desc: 'Integração entre biologia, nanotecnologia e engenharias.' },
        { name: 'Transparência', desc: 'Comunicação precisa de estágios de maturação e dados empíricos.' },
        { name: 'Valorização da vida', desc: 'Propósito centrado em gerar impacto positivo em pacientes e seres vivos.' },
        { name: 'Sustentabilidade', desc: 'Eficiência de insumos, redução de resíduos e inovação responsável.' },
        { name: 'Compromisso com One Health', desc: 'Visão unificada de saúde humana, animal e ambiental.' },
      ],
    },
    technologies: {
      sectionTitle: 'Tecnologias',
      title: 'Nossa plataforma tecnológica',
      subtitle:
        'Integramos diferentes tecnologias para desenvolver modelos experimentais avançados e soluções adaptáveis às necessidades da pesquisa e da indústria.',
      list: [
        {
          id: 'cultivo-3d',
          title: 'Cultivo Celular 3D',
          badge: 'Plataforma Consolidada',
          status: 'consolidated',
          summary: 'Modelos tridimensionais que reproduzem aspectos biológicos do microambiente tecidual.',
          description:
            'Desenvolvimento de modelos tridimensionais que reproduzem com alta fidelidade a organização espacial, gradientes de oxigênio e nutrientes, interações célula-matriz e respostas celulares complexas que não são observadas em culturas 2D convencionais.',
          applications: [
            'Esferoides tumorais de alta reprodutibilidade',
            'Microtumores derivados de pacientes (PDS)',
            'Modelos celulares humanos e animais',
            'Ensaios de citotoxicidade e viabilidade celular',
            'Avaliação de eficácia e proliferação',
            'Estudos morfométricos e caracterização histológica',
            'Triagem de compostos farmacêuticos e nanossistemas',
          ],
          metrics: [
            { label: 'Arquitetura', value: '3D Esferoide / Hidrogel' },
            { label: 'Fidelidade Fisiológica', value: 'Superior a monocamada 2D' },
          ],
        },
        {
          id: 'microfluidica',
          title: 'Microfluídica e Organ-on-a-Chip',
          badge: 'Plataforma Consolidada',
          status: 'consolidated',
          summary: 'Cultivo celular dinâmico sob perfusão contínua e microambientes biomiméticos.',
          description:
            'Dispositivos microfluídicos microfabricados para cultivo dinâmico sob perfusão controlada, permitindo a emulação precisa de forças mecânicas (tensão de cisalhamento), gradientes químicos contínuos e transporte vascular.',
          applications: [
            'Cultivo celular sob perfusão contínua ou pulsátil',
            'Integração com modelos celulares tridimensionais',
            'Sistemas de cocultura celular compartimentada',
            'Gradientes químicos e cinéticas de difusão de fármacos',
            'Modelos Organ-on-a-Chip de múltiplos tecidos',
            'Avaliação hidrodinâmica e estresse mecânico',
            'Triagem dinâmica de ativos e nanofármacos',
          ],
          metrics: [
            { label: 'Canais de Fluido', value: '50µm – 500µm' },
            { label: 'Controle de Cisalhamento', value: '0.1 – 10 dyn/cm²' },
          ],
        },
        {
          id: 'biossensores',
          title: 'Biossensores',
          badge: 'Tecnologia em Desenvolvimento',
          status: 'development',
          summary: 'Integração de sensores ópticos e eletroquímicos para leitura em tempo real.',
          description:
            'Linha tecnológica de ponta voltada à integração de sensores avançados e sistemas de transdução diretamente acoplados às câmaras microfluídicas para monitoramento não invasivo e multiparamétrico.',
          applications: [
            'Monitoramento em tempo real de parâmetros metabólicos (pH, O₂, glicose)',
            'Aquisição contínua de dados celulares sem interrupção de cultivo',
            'Integração com sistemas automatizados de aquisição e telemetria',
            'Sensores impedimétricos para viabilidade celular contínua',
            'Plataformas analíticas miniaturizadas para bioensaios rápidos',
          ],
          metrics: [
            { label: 'Estágio', value: 'P&D e Prototipagem' },
            { label: 'Leitura', value: 'Multiparamétrica em tempo real' },
          ],
        },
        {
          id: 'automacao',
          title: 'Automação e Inteligência de Dados',
          badge: 'Desenvolvimento e Expansão',
          status: 'development',
          summary: 'Padronização, controle ambiental contínuo e reprodutibilidade experimental.',
          description:
            'Desenvolvimento de subsistemas de hardware e software para controle de alto rigor de parâmetros ambientais, com horizonte de integração com algoritmos de visão computacional e inteligência artificial para análise de imagens morfométricas.',
          applications: [
            'Controle de vazão microfluídica de ultraprecisão',
            'Monitoramento contínuo de pressão hidrostática e temperatura',
            'Sistemas de detecção precoce de microbolhas nos canais',
            'Integração automatizada com bombas de perfusão inteligentes',
            'Tratamento e consolidação digital de dados experimentais',
            'Perspectiva de IA para quantificação morfométrica de esferoides',
          ],
          metrics: [
            { label: 'Controle de Fluxo', value: 'Resolução em nanolitros/min' },
            { label: 'Conectividade', value: 'Telemetria digital unificada' },
          ],
        },
      ] as Technology[],
      circuitSectionTitle: 'Esquema Funcional da Plataforma Microfluídica Integrada',
      circuitDescription:
        'Explore interativamente as etapas do fluxo de perfusão e análise da NanoOnco3D. Clique em cada estágio para entender o papel biotecnológico e os parâmetros controlados.',
      circuitSteps: [
        {
          id: 'step-1',
          name: 'Reservatório',
          role: 'Armazenamento de Meio e Ativos',
          detail: 'Armazena soluções nutritivas, fármacos teste ou suspensões de nanossistemas em condições estéreis com estabilização térmica.',
          telemetry: 'Volume: 10 - 50 mL | Osmolaridade: 290-310 mOsm/kg | Controle de CO₂ e O₂',
          parameters: [
            { name: 'Condição', value: 'Estéril classe 100' },
            { name: 'Temperatura', value: '37.0°C ± 0.2' },
          ],
        },
        {
          id: 'step-2',
          name: 'Bomba de Perfusão',
          role: 'Propulsão Microvolumétrica Contínua',
          detail: 'Gera fluxo pulso-livre de fluidos com controle estrito de vazão para simular taxas fisiológicas do leito capilar e circulação tumoral.',
          telemetry: 'Vazão: 1.0 – 50.0 µL/min | Pulso: < 0.5% | Precisão: ± 0.05 µL/min',
          parameters: [
            { name: 'Mecanismo', value: 'Seringa micro-stepper' },
            { name: 'Controle', value: 'Digital PID em malha fechada' },
          ],
        },
        {
          id: 'step-3',
          name: 'Dispositivo Microfluídico',
          role: 'Canais Biomiméticos & Gradientes',
          detail: 'Microcanais de biocompatibilidade avançada (PDMS / polímeros ópticos) com arquitetura projetada para transporte laminar e difusão homogênea.',
          telemetry: 'Largura do canal: 200 µm | Altura: 100 µm | Tensão de cisalhamento: 1.2 dyn/cm²',
          parameters: [
            { name: 'Material', value: 'Polímero biocompatível' },
            { name: 'Regime de Fluxo', value: 'Laminar estrito (Re < 1)' },
          ],
        },
        {
          id: 'step-4',
          name: 'Câmara de Cultivo 3D',
          role: 'Microambiente Celular Tridimensional',
          detail: 'Câmara de retenção onde esferoides tumorais ou organoides são acomodados em hidrogel biomimético, recebendo perfusão contínua.',
          telemetry: 'Diâmetro do esferoide: 300 - 500 µm | Viabilidade basal: > 92% | Células/esferoide: ~10⁴',
          parameters: [
            { name: 'Suporte', value: 'Matriz extracelular bioinspirada' },
            { name: 'Confinamento', value: 'Armadilha hidrodinâmica sem dano' },
          ],
        },
        {
          id: 'step-5',
          name: 'Monitoramento',
          role: 'Sensoriamento e Telemetria (Em Dev.)',
          detail: 'Módulos de sensoriamento óptico e eletroquímico para mensuração contínua de biomarcadores, consumo de oxigênio e viabilidade celular.',
          telemetry: 'Faixa de pH: 6.8 – 7.6 | O₂ dissolvido: 0 – 100% saturação | Pressão de linha: 0 - 30 mmHg',
          parameters: [
            { name: 'Transdução', value: 'Opto-química & Impedimétrica' },
            { name: 'Tempo de Resposta', value: '< 2.5 segundos' },
          ],
        },
        {
          id: 'step-6',
          name: 'Análise de Dados',
          role: 'Processamento & Relatórios Científicos',
          detail: 'Consolidação de séries temporais de vazão, cinética de decaimento de viabilidade celular, morfometria e emissão de laudo analítico estruturado.',
          telemetry: 'IC50 calculada | Curva dose-resposta 3D | Quantificação de necrose central e sobrevida',
          parameters: [
            { name: 'Saída', value: 'Relatório translacional validado' },
            { name: 'Métricas', value: 'Viabilidade, Morfologia e Cinética' },
          ],
        },
      ] as CircuitStep[],
    },
    solutions: {
      sectionTitle: 'Soluções e Serviços',
      title: 'Soluções científicas para transformar desafios em inovação.',
      subtitle:
        'Oferecemos soluções personalizadas para instituições de pesquisa, empresas de biotecnologia e diferentes segmentos da indústria.',
      ctaRequestQuote: 'Solicitar orçamento',
      list: [
        {
          id: 'p-e-d-sob-demanda',
          code: '01',
          name: 'Pesquisa e Desenvolvimento sob Demanda',
          description:
            'Planejamento e execução de estudos experimentais personalizados, incluindo caracterização de materiais, avaliação biológica e investigação de ativos e nanossistemas.',
          targetAudience: 'Indústria farmacêutica, cosmética e centros de P&D.',
          applications: [
            'Projetos experimentais customizados por desafio biotecnológico',
            'Caracterização físico-química e de biocompatibilidade',
            'Ensaios mecanicistas e determinação de mecanismos de ação',
            'Validação preliminar de novos princípios ativos e candidatos a fármacos',
          ],
        },
        {
          id: 'modelos-celulares-3d',
          code: '02',
          name: 'Desenvolvimento de Modelos Celulares 3D',
          description:
            'Produção, padronização e caracterização de modelos tridimensionais avançados para pesquisa básica e aplicações industriais de alta exigência.',
          targetAudience: 'Laboratórios acadêmicos, startups de biotecnologia e farmacêuticas.',
          applications: [
            'Produção seriada de esferoides monocelulares e em cocultura',
            'Modelos tridimensionais de células primárias e linhagens contínuas',
            'Microtumores derivados de biópsias (pesquisa translacional)',
            'Padronização dimensional e controle de qualidade lote a lote',
          ],
        },
        {
          id: 'triagem-ativos',
          code: '03',
          name: 'Triagem de Ativos e Nanossistemas',
          description:
            'Avaliação experimental de eficácia, viabilidade, citotoxicidade e respostas celulares dinâmicas em diferentes modelos biológicos de alta relevância.',
          targetAudience: 'Empresas de cosméticos, nanotecnologia e fitoterápicos.',
          applications: [
            'Ensaios dose-resposta (IC50) em modelos 3D sob perfusão',
            'Avaliação de penetração tecidual de nanocarreadores e nanopartículas',
            'Testes de citotoxicidade segundo normas ISO 10993-5 adaptadas',
            'Cinética de proliferação celular e apoptose em tempo real',
          ],
        },
        {
          id: 'dispositivos-microfluidicos',
          code: '04',
          name: 'Dispositivos Microfluídicos',
          description:
            'Desenvolvimento, microfabricação e fornecimento de biochips microfluídicos adaptados às necessidades experimentais de pesquisadores e empresas.',
          targetAudience: 'Institutos de bioengenharia, biofísica e laboratórios industriais.',
          applications: [
            'Projeto CAD/CAM e modelagem de escoamento microfluídico',
            'Fabricação em polímeros ópticos e elastômeros biocompatíveis (PDMS)',
            'Dispositivos com armadilhas celulares para cultivo de esferoides',
            'Chips com conectores luer padrão para integração em bancada',
          ],
        },
        {
          id: 'consultoria-cientifica',
          code: '05',
          name: 'Consultoria Técnico-Científica',
          description:
            'Consultoria estratégica para planejamento experimental, desenvolvimento de protocolos, padronização de métodos e estratégias de validação científica.',
          targetAudience: 'Grupos de pesquisa, gestores de inovação e agências de fomento.',
          applications: [
            'Desenho de ensaios translacionais de alta confiabilidade',
            'Adequação metodológica aos princípios dos 3Rs (substituição de animais)',
            'Suporte a relatórios de conformidade e submissões regulatórias',
            'Revisão técnica de projetos de captação em inovação (FINEP/FAPERJ)',
          ],
        },
        {
          id: 'capacitacao-tecnologica',
          code: '06',
          name: 'Capacitação Tecnológica',
          description:
            'Treinamentos imersivos e cursos práticos relacionados a cultivo celular 3D, microfluídica e implementação de plataformas experimentais de bancada.',
          targetAudience: 'Pesquisadores, pós-graduandos e equipes técnicas de laboratórios.',
          applications: [
            'Curso prático de conformação e manutenção de esferoides 3D',
            'Treinamento em montagem e operação de circuitos microfluídicos',
            'Protocolos de microscopia confocal e citometria em modelos 3D',
            'Workshops customizados in company para empresas e universidades',
          ],
        },
      ] as Solution[],
    },
    applications: {
      sectionTitle: 'Áreas de Aplicação',
      title: 'Uma plataforma tecnológica. Múltiplas possibilidades.',
      subtitle:
        'Nossa infraestrutura biotecnológica multidisciplinar responde às demandas mais complexas da saúde humana, animal e da indústria produtiva.',
      list: [
        {
          id: 'medicina-personalizada',
          title: 'Medicina Personalizada',
          subtitle: 'Oncologia Translacional & Modelos Derivados de Pacientes',
          description:
            'Desenvolvimento de microtumores tridimensionais a partir de amostras de pacientes para investigar respostas terapêuticas individualizadas. Nossa linha de pesquisa visa subsidiar a seleção racional de regimes quimioterápicos mais eficazes para cada perfil biológico.',
          image: '/src/assets/images/tumor_spheroid_3d_1792212593676.jpg',
          applications: [
            'Cultivo de microtumores primários preservando o estroma celular nativo',
            'Triagem ex-vivo de sensibilidade e resistência a quimioterápicos',
            'Investigação de combinações terapêuticas e sinergismos farmacológicos',
            'Geração de dados preliminares para pesquisa oncológica translacional',
          ],
          workflow: [
            { step: 1, title: 'Amostra Biológica', desc: 'Isolamento e processamento de células tumorais com preservação da viabilidade.' },
            { step: 2, title: 'Modelo Tumoral 3D', desc: 'Conformação de esferoides tridimensionais em matriz extracelular bioinspirada.' },
            { step: 3, title: 'Triagem Experimental', desc: 'Exposição controlada a quimioterápicos sob parâmetros padronizados.' },
            { step: 4, title: 'Análise de Respostas', desc: 'Quantificação confocal de apoptose, citotoxicidade e integridade tumoral.' },
            { step: 5, title: 'Relatório Científico', desc: 'Consolidação de curvas de sensibilidade para suporte à investigação.' },
          ],
          regulatoryNote:
            'Nota ética e regulatória: A aplicação em conduta clínica constitui objetivo de desenvolvimento translacional, sujeito aos ensaios de validação analítica e clínica e às aprovações regulatórias dos órgãos competentes.',
        },
        {
          id: 'industria-farmaceutica',
          title: 'Indústria Farmacêutica',
          subtitle: 'Descoberta de Fármacos & Ensaios Pré-Clínicos Preditivos',
          description:
            'Plataforma de alta relevância para a triagem primária e secundária de candidatos a fármacos, permitindo antecipar respostas teciduais antes das fases in vivo avançadas, reduzindo custos de atrito e tempo de desenvolvimento.',
          image: '/src/assets/images/organ_on_a_chip_device_1792212592652.jpg',
          applications: [
            'Triagem de alto conteúdo de novas moléculas e candidatos terapêuticos',
            'Estudos detalhados de eficácia, citotoxicidade e janela terapêutica',
            'Avaliação de sinergismos de combinações de fármacos',
            'Estudos de penetração e transporte em sistemas microvasculares',
            'Métodos alternativos mais preditivos do que monocamadas plásticas 2D',
          ],
        },
        {
          id: 'industria-cosmetica',
          title: 'Indústria Cosmética',
          subtitle: 'Bioensaios Avançados & Substituição de Testes em Animais',
          description:
            'Soluções éticas alinhadas às diretrizes internacionais dos 3Rs e às exigências de segurança de novos ingredientes ativos, dermocosméticos e produtos de higiene pessoal.',
          image: '/src/assets/images/hero_spheroid_microfluidics_1792212591565.jpg',
          applications: [
            'Avaliação toxicológica e de biocompatibilidade de ingredientes',
            'Ensaios em modelos de pele tridimensional reconstituída',
            'Testes de irritabilidade, viabilidade epitelial e estresse oxidativo',
            'Avaliação da eficácia regenerativa e anti-idade de ativos botânicos e sintéticos',
            'Conformidade integral com legislações de banimento de testes animais',
          ],
        },
        {
          id: 'medicina-veterinaria',
          title: 'Medicina Veterinária',
          subtitle: 'Saúde Animal & Abordagem Integrada One Health',
          description:
            'Aplicação direta de modelos 3D e microfluídica para pesquisa de patologias em animais de companhia e de produção, apoiando o desenvolvimento de terapias inovadoras no contexto da saúde global unificada.',
          image: '/src/assets/images/biotech_lab_perfusion_1792212592991.jpg',
          applications: [
            'Modelos celulares 3D derivados de espécies canina, felina e equina',
            'Investigação de neoplasias animais de alta prevalência (ex: mastocitomas)',
            'Ensaios de eficácia e segurança de novos antiparasitários e biológicos',
            'Pesquisa translacional comparada conectando medicina animal e humana',
            'Desenvolvimento de métodos alternativos à experimentação animal veterinária',
          ],
        },
      ] as ApplicationArea[],
    },
    team: {
      sectionTitle: 'Nosso Time',
      title: 'As pessoas por trás da inovação.',
      subtitle:
        'Nossa equipe reúne profissionais e pesquisadores de diferentes áreas do conhecimento, conectando ciência, tecnologia e empreendedorismo para desenvolver soluções inovadoras para a saúde e a indústria.',
      closingText: 'A inovação nasce do encontro entre diferentes conhecimentos, experiências e pessoas.',
      validationNote: 'Estrutura institucional de competências técnico-científicas originada no ecossistema de pesquisa e inovação da Universidade Federal Fluminense (UFF).',
      leadership: {
        id: 'jessica-dornelas',
        name: 'Jéssica Dornelas',
        role: 'Founder & CEO',
        credentials: 'PhD em Ciência e Biotecnologia',
        institution: 'Universidade Federal Fluminense (UFF)',
        specialty: 'Biomateriais, Nanotecnologia, Cultivo 3D & Microfluídica',
        bio: 'Pesquisadora e empreendedora com vasta experiência em biomateriais, nanotecnologia aplicada à saúde, cultivo celular tridimensional e engenharia de plataformas microfluídicas. Lidera a estratégia executiva e científica da NanoOnco3D, integrando rigor metodológico, parcerias translacionais e captação de projetos de inovação.',
        linkedin: 'https://www.linkedin.com/in/jessicadornelas/',
        category: 'leadership',
      } as TeamMember,
      scientificTeam: [
        {
          id: 'adriany-lucas',
          name: 'Adriany Lucas',
          role: 'Bióloga & Pesquisadora',
          credentials: 'Mestre em Microbiologia',
          institution: 'Pesquisa Biomédica',
          specialty: 'Modelos tridimensionais de origem animal e análises microbiológicas',
          bio: 'Especialista em modelos biológicos tridimensionais para estudos de infecção, microbiota e saúde animal, atuando na padronização de ensaios celulares.',
          category: 'scientific',
        },
        {
          id: 'joice-correa',
          name: 'Joice Corrêa',
          role: 'Farmacêutica',
          credentials: 'Graduação em Farmácia',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Produção de modelos tumorais 3D & Estudos translacionais',
          bio: 'Atuação na produção, caracterização e acompanhamento de modelos tumorais tridimensionais e protocolos translacionais de seleção de quimioterápicos.',
          category: 'scientific',
        },
        {
          id: 'gabrielly-macedo',
          name: 'Gabrielly Macedo',
          role: 'Farmacêutica',
          credentials: 'Graduação em Farmácia',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Tratamentos e protocolos quimioterápicos em oncologia',
          bio: 'Foco no levantamento de regimes terapêuticos e protocolos quimioterápicos para subsidiar ensaios de sensibilidade em modelos celulares.',
          category: 'scientific',
        },
        {
          id: 'jhonny-bonforte',
          name: 'Jhonny Bonforte',
          role: 'Pesquisador Técnico',
          credentials: 'Ciências Biológicas',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Padronização de modelos tridimensionais de células primárias',
          bio: 'Apoio técnico-científico no isolamento celular, conformação de esferoides primários e quantificação de parâmetros de viabilidade.',
          category: 'scientific',
        },
        {
          id: 'guilherme-dessen',
          name: 'Guilherme Dessen',
          role: 'Pesquisador Técnico',
          credentials: 'Ciências Biológicas',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Desenvolvimento e produção de dispositivos microfluídicos',
          bio: 'Apoio técnico na microfabricação de biochips, montagem de montagens experimentais e controle de integridade de canais microfluídicos.',
          category: 'scientific',
        },
        {
          id: 'joao-dantas',
          name: 'João Dantas',
          role: 'Nanotecnologista',
          credentials: 'Mestre em Engenharia de Nanotecnologia',
          institution: 'UFRJ / UFF',
          specialty: 'Desenvolvimento, caracterização e simulação de biochips',
          bio: 'Especialista em engenharia de microcanais, simulação de escoamento computacional (CFD) e caracterização de superfícies para aplicações biomédicas.',
          category: 'scientific',
        },
      ] as TeamMember[],
      advisors: [
        {
          id: 'gutemberg-alves',
          name: 'Dr. Gutemberg Alves',
          role: 'Consultor Científico & Cooperador Tecnológico',
          credentials: 'Doutor em Bioquímica (UFRJ) | Professor Titular UFF',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Bioquímica, Cultura Celular & Biocompatibilidade de Materiais',
          bio: 'Pesquisador com extensa produção científica em ensaios de citotoxicidade, biomateriais e biologia tecidual, fornecendo orientação sênior para as plataformas de P&D.',
          category: 'advisor',
        },
        {
          id: 'andrea-baptista',
          name: 'Dra. Andrea Baptista',
          role: 'Consultora Científica & Cooperadora Tecnológica',
          credentials: 'Doutora em Biociências (UNESP) | Professora Titular UFF',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Biociências, Imunologia & Ensaios Translacionais',
          bio: 'Professora titular com sólida atuação em respostas imunes e modelos biológicos experimentais, orientando diretrizes éticas e de validação científica.',
          category: 'advisor',
        },
      ] as TeamMember[],
    },
    differentials: {
      sectionTitle: 'Diferenciais Competitivos',
      title: 'Por que desenvolver com a NanoOnco3D?',
      subtitle: 'Conectamos competências multidisciplinares para entregar valor científico sólido e resultados práticos.',
      items: [
        {
          id: 'diff-1',
          title: 'Integração Tecnológica',
          desc: 'Convergência única entre biologia 3D, microfluídica e automação para criar plataformas biomiméticas dinâmicas sob fluxo contínuo.',
        },
        {
          id: 'diff-2',
          title: 'Personalização Extrema',
          desc: 'Soluções customizadas desenhadas sob medida para o desafio biológico específico de cada parceiro, empresa ou pesquisador.',
        },
        {
          id: 'diff-3',
          title: 'Especialização Científica',
          desc: 'Equipe multidisciplinar com pesquisadores doutores e mestres em biotecnologia, farmácia, bioquímica e nanotecnologia.',
        },
        {
          id: 'diff-4',
          title: 'Modelos Biológicos Avançados',
          desc: 'Superação das limitações das culturas celulares em monocamada 2D com gradientes físico-químicos e arquitetura celular realista.',
        },
        {
          id: 'diff-5',
          title: 'Desenvolvimento Nacional',
          desc: 'Tecnologia profunda desenvolvida no Brasil, fortalecendo a soberania científica nacional e reduzindo custos e dependência de importação.',
        },
        {
          id: 'diff-6',
          title: 'Visão One Health',
          desc: 'Abordagem translacional abrangente que conecta a saúde de humanos, animais e meio ambiente em um compromisso único de bem-estar.',
        },
      ],
    },
    roadmap: {
      sectionTitle: 'Inovação & Roadmap',
      title: 'Nossa trajetória de inovação',
      subtitle: 'Da concepção acadêmica à consolidação de uma plataforma DeepTech de impacto translacional.',
      milestones: [
        {
          year: '2021',
          title: 'Gênese Tecnológica',
          description: 'Início da trajetória de desenvolvimento e empreendedorismo de base científica no campo de biomateriais e modelos celulares 3D.',
          status: 'completed',
          deliverables: ['Formulação conceitual da plataforma', 'Primeiros testes de esferoides celulares'],
        },
        {
          year: '2022',
          title: 'Estruturação & Conexão UFF',
          description: 'Estruturação da NanoOnco3D e ancoragem no ecossistema de inovação da Universidade Federal Fluminense.',
          status: 'completed',
          deliverables: ['Constituição formal da empresa', 'Ingresso no ecossistema acadêmico de inovação'],
        },
        {
          year: '2023',
          title: 'Avanço Microfluídico',
          description: 'Desenvolvimento tecnológico das primeiras matrizes de biochips e participação em editais de fomento e inovação em saúde.',
          status: 'completed',
          deliverables: ['Prototipagem de canais microfluídicos', 'Ensaios de perfusão celular'],
        },
        {
          year: '2024',
          title: 'Parcerias & Validação 3D',
          description: 'Fortalecimento de colaborações científicas interinstitucionais e maturação das plataformas de cultivo 3D.',
          status: 'completed',
          deliverables: ['Protocolos padronizados de esferoides tumorais', 'Acordos com laboratórios parceiros'],
        },
        {
          year: '2025',
          title: 'Expansão de P&D',
          description: 'Continuidade da fabricação seriada de biochips, refinamento dos ensaios translacionais e expansão da carteira de soluções.',
          status: 'completed',
          deliverables: ['Validação experimental estendida', 'Atendimento a projetos sob demanda'],
        },
        {
          year: '2026+',
          title: 'Automação & Internacionalização',
          description: 'Avanço dos módulos de automação, integração de biossensores em tempo real, proteção de propriedade intelectual e expansão.',
          status: 'future',
          deliverables: [
            'Integração física de biossensores analíticos',
            'Sistemas embarcados de controle de perfusão',
            'Algoritmos de inteligência de dados para análise de imagem',
            'Validação regulatória analítica e expansão comercial',
          ],
        },
      ] as RoadmapMilestone[],
    },
    ecosystem: {
      sectionTitle: 'Parcerias & Ecossistema',
      title: 'A inovação acontece por meio de conexões.',
      subtitle:
        'A NanoOnco3D desenvolve sua trajetória em conexão com instituições científicas, ambientes de inovação, empresas e organizações que impulsionam o avanço biotecnológico.',
      ctaPartner: 'Seja nosso parceiro',
      categories: [
        {
          title: 'Instituições Científicas e Tecnológicas',
          description: 'Centros de excelência acadêmica e laboratórios de pesquisa de ponta.',
          partners: [
            { name: 'Universidade Federal Fluminense (UFF)', role: 'Berço científico e cooperação de P&D', category: 'scientific' },
            { name: 'Hospital Universitário Antônio Pedro (HUAP/UFF)', role: 'Ambiente clínico e pesquisa translacional', category: 'scientific' },
            { name: 'Centro Brasileiro de Pesquisas Físicas (CBPF)', role: 'Cooperação tecnológica em materiais e física', category: 'scientific' },
            { name: 'Universidade de Brasília (UnB)', role: 'Intercâmbio e cooperação acadêmica', category: 'scientific' },
            { name: 'CTI Renato Archer', role: 'Tecnologia da informação e microfabricação', category: 'scientific' },
            { name: 'LaNBDA / UNICAMP', role: 'Nanobiotecnologia e dispositivos analíticos', category: 'scientific' },
          ] as PartnerOrg[],
        },
        {
          title: 'Ambientes de Inovação & Apoio',
          description: 'Programas de aceleração, incubação e desenvolvimento empresarial.',
          partners: [
            { name: 'AGIR / UFF', role: 'Agência de Inovação da UFF', category: 'innovation' },
            { name: 'CTI-Tec', role: 'Ambiente de inovação tecnológica do CTI', category: 'innovation' },
            { name: 'InovaHC', role: 'Núcleo de Inovação Tecnológica Hospital das Clínicas', category: 'innovation' },
            { name: 'SEBRAE', role: 'Capacitação e fortalecimento de negócios DeepTech', category: 'innovation' },
          ] as PartnerOrg[],
        },
        {
          title: 'Colaborações e Projetos',
          description: 'Entidades parceiras em materiais biológicos e nanotecnologia.',
          partners: [
            { name: 'Banco de Células do Rio de Janeiro (BCRJ)', role: 'Linhagens celulares certificadas e controle de qualidade', category: 'collaboration' },
            { name: 'Matech Brasil', role: 'Desenvolvimento e cooperação em biomateriais avançados', category: 'collaboration' },
          ] as PartnerOrg[],
        },
      ],
      fundingAgencies: ['FAPERJ', 'FINEP', 'CNPq', 'CAPES'],
    },
    knowledge: {
      sectionTitle: 'Pesquisa & Conhecimento',
      title: 'Conhecimento que impulsiona a inovação.',
      subtitle:
        'Acompanhe publicações, artigos conceituais e avanços em cultivo tridimensional, dispositivos microfluídicos e biotecnologia translacional.',
      articles: [
        {
          id: 'art-1',
          category: 'Cultivo Celular 3D',
          title: 'Modelos de Esferoides Tumorais vs Culturas Monocamada 2D na Preditividade Quimioterápica',
          date: 'Fevereiro 2026',
          readTime: '6 min de leitura',
          summary:
            'Uma análise aprofundada de como gradientes de oxigênio e a densa matriz extracelular em esferoides 3D reduzem falsos positivos na avaliação de fármacos antineoplásicos.',
          content:
            'Durante décadas, a triagem primária de candidatos a fármacos oncológicos baseou-se em culturas celulares bidimensionais sobre superfícies de poliestireno rígido. No entanto, modelos 2D não reproduzem as barreiras de difusão de fármacos, o consumo heterogêneo de oxigênio nem as interações tridimensionais célula-célula observadas in vivo. Esferoides tumorais tridimensionais restabelecem a zona proliferativa externa, zona quiescente intermediária e o núcleo necrótico hipóxico, mimetizando a quimiorresistência fisiológica de tumores sólidos.',
          author: 'Equipe Científica NanoOnco3D',
        },
        {
          id: 'art-2',
          category: 'Microfluídica & Organ-on-Chip',
          title: 'O Papel do Estresse de Cisalhamento na Maturação de Modelos Microvasculares e Órgão-em-Chip',
          date: 'Janeiro 2026',
          readTime: '5 min de leitura',
          summary:
            'Como o fluxo de perfusão laminar em microcanais de 200 µm influencia o alinhamento celular endotelial e a permeabilidade de barreira para fármacos.',
          content:
            'A perfusão contínua em plataformas microfluídicas introduz forças mecânicas hidrodinâmicas essenciais para a fisiologia celular. O estresse de cisalhamento ativa vias de sinalização mecanossensíveis que regulam a síntese de matriz extracelular, junções comunicantes (tight junctions) e expressão de transportadores de efluxo. A transição de cultivos estáticos para sistemas dinâmicos microfluídicos representa o salto quantitativo necessário para aproximar os ensaios de bancada da resposta farmacocinética real.',
          author: 'Engenharia de Dispositivos NanoOnco3D',
        },
        {
          id: 'art-3',
          category: 'Medicina Translacional',
          title: 'Princípios dos 3Rs na Indústria de Life Sciences: Redução, Refinamento e Substituição com Biochips',
          date: 'Dezembro 2025',
          readTime: '4 min de leitura',
          summary:
            'Estratégias para substituição progressiva de testes em animais na avaliação de segurança e eficácia de cosméticos e ativos farmacêuticos.',
          content:
            'A harmonização regulatória internacional impulsionada pelo FDA Modernization Act 2.0 e normativas da OCDE e ANVISA abriu espaço prioritário para Métodos de Abordagem Não-Animal (NAMs). Dispositivos Organ-on-a-Chip e modelos 3D fornecem dados toxicológicos mecanísticos com alta repetibilidade, menor variabilidade biológica e total conformidade ética com o bem-estar e a sustentabilidade científica.',
          author: 'Comitê Técnico-Científico NanoOnco3D',
        },
      ] as NewsItem[],
    },
    contact: {
      sectionTitle: 'Contato & Proposta',
      title: 'Vamos desenvolver novas soluções juntos?',
      subtitle:
        'Se você busca soluções em cultivo celular 3D, microfluídica, desenvolvimento de dispositivos ou pesquisa biotecnológica, nossa equipe está disponível para conhecer seus desafios e avaliar oportunidades de colaboração.',
      corporateInfo: {
        company: 'NanoOnco3D Biotecnologia',
        website: 'https://www.nanoonco3d.com.br',
        email: 'dornelas.jessica@nanoonco3d.com.br',
        phone: '+55 (21) 98228-5680',
        phoneFormatted: '+55 21 98228-5680',
        whatsappUrl: 'https://wa.me/5521982285680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20NanoOnco3D.',
        linkedinUrl: 'https://www.linkedin.com/company/nanoonco3d/',
        location: 'Niterói / Rio de Janeiro, Brasil',
      },
      form: {
        title: 'Formulário de Solicitação de Proposta e Parceria',
        fullName: 'Nome completo',
        organization: 'Empresa ou instituição de pesquisa',
        email: 'E-mail profissional',
        phone: 'Telefone / WhatsApp',
        interestArea: 'Área de interesse',
        desiredService: 'Serviço desejado',
        message: 'Descreva resumidamente o objetivo ou desafio do seu projeto',
        consent: 'Concordo com o tratamento dos meus dados para fins de retorno comercial e técnico pela NanoOnco3D, em conformidade com a LGPD.',
        submitButton: 'Enviar solicitação',
        submittingButton: 'Enviando dados...',
        successTitle: 'Solicitação enviada com sucesso!',
        successMessage:
          'Recebemos suas informações. Nossa liderança científica entrará em contato em até 48 horas úteis para agendar uma reunião técnica de alinhamento.',
        sendAnother: 'Enviar nova mensagem',
      },
      interestOptions: [
        'Medicina personalizada & Oncologia',
        'Indústria farmacêutica (Triagem pré-clínica)',
        'Indústria cosmética & Testes de segurança (3Rs)',
        'Medicina veterinária & Saúde animal',
        'Pesquisa científica e acadêmica',
        'Desenvolvimento de dispositivos microfluídicos customizados',
        'Parcerias institucionais e cooperação em P&D',
        'Outros',
      ],
      serviceOptions: [
        '01 — Pesquisa e Desenvolvimento sob Demanda',
        '02 — Desenvolvimento de Modelos Celulares 3D',
        '03 — Triagem de Ativos e Nanossistemas',
        '04 — Dispositivos Microfluídicos',
        '05 — Consultoria Técnico-Científica',
        '06 — Capacitação Tecnológica',
        'Parceria Institucional ou Cooperação de P&D',
      ],
    },
    footer: {
      tagline: 'Ciência e tecnologia para transformar o futuro da saúde.',
      quickLinksTitle: 'Navegação',
      solutionsTitle: 'Soluções',
      contactTitle: 'Contatos Oficiais',
      copyright: 'Todos os direitos reservados.',
      privacyPolicy: 'Política de Privacidade & LGPD',
      cookiesPolicy: 'Política de Cookies',
      termsOfUse: 'Termos de Uso',
    },
  },
  en: {
    hero: {
      tagline: 'Brazilian DeepTech in Biotechnology & Precision Medicine',
      title: 'Technologies connecting science to life-changing solutions.',
      subtitle:
        'We integrate 3D cell culture, microfluidics, and advanced monitoring technologies to engineer innovative biological models and tailored solutions for research, industry, and healthcare.',
      complement:
        'From experimental investigation to applied innovation, we bridge biology, engineering, and technology to translate complex scientific challenges into therapeutic possibilities.',
      ctaPrimary: 'Explore Our Technologies',
      ctaSecondary: 'Discover Solutions',
      ctaContact: 'Speak with Our Specialists',
      stats: [
        { label: 'Translational Models', value: '3D & Organ-on-Chip' },
        { label: 'Academic Origin', value: 'UFF Ecosystem' },
        { label: 'Integrated Vision', value: 'One Health' },
        { label: 'Strategic Impact', value: 'Health & Industry' },
      ],
    },
    about: {
      sectionTitle: 'About Us',
      title: 'Science, technology, and innovation connected to transform the future of healthcare.',
      lead:
        'NanoOnco3D is a Brazilian DeepTech dedicated to developing advanced biotechnology platforms for biomedical research, bioengineering, and personalized medicine.',
      paragraphs: [
        'Our operations integrate cutting-edge knowledge in cellular biology, three-dimensional cell culture, microfluidics, and laboratory automation to construct predictive experimental platforms that enhance drug screening, active ingredient validation, and therapeutic discovery.',
        'Originating from the scientific ecosystem of Universidade Federal Fluminense (UFF), we translate rigorous academic research into scalable technologies applicable to human health, veterinary medicine, and various industrial sectors.',
      ],
      missionTitle: 'Mission',
      mission:
        'To develop biological and microfluidic technologies that advance biomedical research, streamline industrial innovation, and support evidence-based decisions in health.',
      visionTitle: 'Vision',
      vision:
        'To stand as a national and international benchmark in integrated biotechnology platforms for translational research, product development, and personalized medicine.',
      valuesTitle: 'Core Values',
      values: [
        { name: 'Scientific Rigor', desc: 'Strict experimental methodology and reproducible workflows.' },
        { name: 'Ethics & Responsibility', desc: 'Transparent operation and strict compliance with ethical guidelines.' },
        { name: 'Technological Innovation', desc: 'Proprietary engineering in microfluidics and bioengineering.' },
        { name: 'Interdisciplinary Collaboration', desc: 'Harmonious fusion of biology, nanotechnology, and engineering.' },
        { name: 'Transparency', desc: 'Honest communication of technology readiness levels and data.' },
        { name: 'Commitment to Life', desc: 'Purpose dedicated to generating meaningful patient and living-being impact.' },
        { name: 'Sustainability', desc: 'Resource efficiency, reduced consumable waste, and responsible biotech.' },
        { name: 'One Health Vision', desc: 'Unified perspective encompassing human, animal, and planetary health.' },
      ],
    },
    technologies: {
      sectionTitle: 'Technologies',
      title: 'Our Technology Platform',
      subtitle:
        'We integrate proprietary biotechnology modules to deliver advanced experimental models tailored to the demands of modern research and industrial pipelines.',
      list: [
        {
          id: 'cultivo-3d',
          title: '3D Cell Culture',
          badge: 'Established Platform',
          status: 'consolidated',
          summary: 'Three-dimensional models reproducing physiological tissue architecture and microenvironments.',
          description:
            'Engineering 3D spheroids and organoids that recreate spatial cell-cell and cell-matrix interactions, realistic nutrient and oxygen gradients, and multi-layered chemoresistance profiles unachievable in 2D culture.',
          applications: [
            'High-reproducibility tumor spheroids',
            'Patient-derived microtumors (PDS)',
            'Human and veterinary primary cell models',
            'Cytotoxicity and cellular viability profiling',
            'Proliferation and efficacy screening',
            'Morphometric and histological characterization',
            'Screening of chemical entities and nanosystems',
          ],
          metrics: [
            { label: 'Architecture', value: '3D Spheroid / Hydrogel' },
            { label: 'Physiological Fidelity', value: 'Superior to 2D plastic' },
          ],
        },
        {
          id: 'microfluidica',
          title: 'Microfluidics & Organ-on-a-Chip',
          badge: 'Established Platform',
          status: 'consolidated',
          summary: 'Dynamic cell culture under controlled continuous perfusion and biomimetic microchannels.',
          description:
            'Precision microfluidic biochips designed for dynamic fluid perfusion, emulating physiological shear stress, steady chemical gradients, and continuous nutrient/waste replenishment.',
          applications: [
            'Continuous or pulsatile perfusion culture',
            'Direct integration with 3D multicellular spheroids',
            'Compartmentalized cellular co-culture systems',
            'Chemical gradient and drug diffusion kinetics',
            'Multi-tissue Organ-on-a-Chip architectures',
            'Hydrodynamic characterization and wall shear stress control',
            'Dynamic screening of nanomedicines and actives',
          ],
          metrics: [
            { label: 'Fluidic Channels', value: '50µm – 500µm' },
            { label: 'Shear Stress Range', value: '0.1 – 10 dyn/cm²' },
          ],
        },
        {
          id: 'biossensores',
          title: 'Biosensors',
          badge: 'Technology in Development',
          status: 'development',
          summary: 'Coupled optical and electrochemical sensors for real-time non-invasive bio-telemetry.',
          description:
            'Emerging R&D pipeline integrating micro-fabricated sensors directly into biochip chambers for continuous, non-destructive metabolic assessment and viability monitoring.',
          applications: [
            'Real-time measurement of metabolic markers (pH, dissolved O₂, glucose)',
            'Continuous data streaming without stopping cell culture',
            'Integration with automated digital telemetry consoles',
            'Impedimetric sensors for real-time cellular barrier analysis',
            'Miniaturized analytical platforms for rapid point-of-care bioassays',
          ],
          metrics: [
            { label: 'Stage', value: 'R&D & Prototyping' },
            { label: 'Readout', value: 'Multiparametric real-time' },
          ],
        },
        {
          id: 'automacao',
          title: 'Automation & Data Intelligence',
          badge: 'Development & Expansion',
          status: 'development',
          summary: 'Environmental standardization, closed-loop telemetry, and experimental reproducibility.',
          description:
            'Development of integrated hardware and software controllers for automated perfusion management, coupled with a roadmap toward AI-driven computer vision for automated spheroid morphometry.',
          applications: [
            'Ultra-precise microfluidic flow rate regulation',
            'Continuous monitoring of hydrostatic line pressure and temperature',
            'Automated inline bubble detection and degassing triggers',
            'Smart closed-loop perfusion pump controllers',
            'Standardized data logging and analytical exports',
            'Roadmap: Deep learning algorithms for spheroid morphology segmentation',
          ],
          metrics: [
            { label: 'Flow Resolution', value: 'Nanoliters/min precision' },
            { label: 'Connectivity', value: 'Digital unified telemetry' },
          ],
        },
      ] as Technology[],
      circuitSectionTitle: 'Integrated Microfluidic System Architecture',
      circuitDescription:
        'Explore the interconnected perfusion and analytical stages of NanoOnco3D. Click each module to examine its biological role and precision parameters.',
      circuitSteps: [
        {
          id: 'step-1',
          name: 'Reservoir',
          role: 'Media & Compound Preservation',
          detail: 'Sterile containment of culture media, drug compounds, or nanosystem formulations under controlled temperature and gas saturation.',
          telemetry: 'Volume: 10 - 50 mL | Osmolality: 290-310 mOsm/kg | CO₂/O₂ Balanced',
          parameters: [
            { name: 'Environment', value: 'Class 100 sterile' },
            { name: 'Temperature', value: '37.0°C ± 0.2' },
          ],
        },
        {
          id: 'step-2',
          name: 'Perfusion Pump',
          role: 'Continuous Pulse-Free Fluid Delivery',
          detail: 'High-precision micro-stepper syringe propulsion delivering steady flow rates emulating physiological capillary microcirculation.',
          telemetry: 'Flow: 1.0 – 50.0 µL/min | Pulsation: < 0.5% | Precision: ± 0.05 µL/min',
          parameters: [
            { name: 'Drive Mechanism', value: 'Micro-stepper syringe' },
            { name: 'Feedback Control', value: 'Closed-loop digital PID' },
          ],
        },
        {
          id: 'step-3',
          name: 'Microfluidic Device',
          role: 'Biomimetic Channels & Laminar Transport',
          detail: 'Precision engineered polymer biochip with microchannels designed to support laminar fluid kinetics without mechanical cell trauma.',
          telemetry: 'Channel width: 200 µm | Height: 100 µm | Wall shear stress: 1.2 dyn/cm²',
          parameters: [
            { name: 'Bio-Polymer', value: 'Optical grade elastomer' },
            { name: 'Flow Regime', value: 'Strictly laminar (Re < 1)' },
          ],
        },
        {
          id: 'step-4',
          name: '3D Culture Chamber',
          role: 'Tridimensional Cellular Microenvironment',
          detail: 'Hydrodynamic micro-wells where 3D spheroids or organoids reside within an extracellular matrix, receiving continuous dynamic perfusion.',
          telemetry: 'Spheroid diameter: 300 - 500 µm | Basal viability: > 92% | Cells/spheroid: ~10⁴',
          parameters: [
            { name: 'Scaffold', value: 'Bio-inspired extracellular hydrogel' },
            { name: 'Cellular Trap', value: 'Zero-shear retention trap' },
          ],
        },
        {
          id: 'step-5',
          name: 'Monitoring',
          role: 'Real-Time Sensor Integration (In Dev.)',
          detail: 'Integrated optical and electrochemical sensor interfaces measuring metabolic trends, dissolved oxygen consumption, and membrane dynamics.',
          telemetry: 'pH range: 6.8 – 7.6 | Dissolved O₂: 0 – 100% saturation | Line pressure: 0 - 30 mmHg',
          parameters: [
            { name: 'Transduction', value: 'Opto-chemical & Impedimetric' },
            { name: 'Response Time', value: '< 2.5 seconds' },
          ],
        },
        {
          id: 'step-6',
          name: 'Data Intelligence',
          role: 'Signal Processing & Scientific Reports',
          detail: 'Algorithmic curation of flow parameters, dose-response survival curves, morphometric changes, and structured translational reports.',
          telemetry: 'Computed IC50 | 3D dose-response curve | Necrotic core vs viable rim index',
          parameters: [
            { name: 'Deliverable', value: 'Validated translational report' },
            { name: 'Metrics', value: 'Viability, Morphology & Kinetics' },
          ],
        },
      ] as CircuitStep[],
    },
    solutions: {
      sectionTitle: 'Solutions & Services',
      title: 'Scientific solutions transforming biological challenges into breakthrough innovation.',
      subtitle:
        'We engineer tailored contracts and assays for research institutions, biotechnology firms, and diverse industrial sectors.',
      ctaRequestQuote: 'Request Proposal',
      list: [
        {
          id: 'p-e-d-sob-demanda',
          code: '01',
          name: 'On-Demand Research & Development',
          description:
            'Customized experimental design and execution, covering biomaterial characterization, cell interaction profiling, and nanosystem validation.',
          targetAudience: 'Pharmaceutical, cosmetic, and advanced biotech R&D centers.',
          applications: [
            'Bespoke bioengineering projects tailored to proprietary targets',
            'Physicochemical biocompatibility and hemocompatibility testing',
            'Mechanistic assays and pathway elucidation',
            'Early-stage candidate de-risking and lead optimization',
          ],
        },
        {
          id: 'modelos-celulares-3d',
          code: '02',
          name: '3D Cellular Model Development',
          description:
            'Standardized production and characterization of tridimensional cellular spheroids and organotypic structures for research and testing.',
          targetAudience: 'Academic laboratories, biotech startups, and clinical trial groups.',
          applications: [
            'High-throughput monoculture and co-culture tumor spheroids',
            'Primary patient and veterinary cell models',
            'Histological and confocal fluorescent validation',
            'Strict batch-to-batch dimensional quality assurance',
          ],
        },
        {
          id: 'triagem-ativos',
          code: '03',
          name: 'Active Ingredient & Nanosystem Screening',
          description:
            'Experimental evaluation of drug candidate efficacy, viability, cytotoxicity, and cellular dynamics in high-fidelity 3D models.',
          targetAudience: 'Cosmetic manufacturers, phytotherapeutic firms, and pharma innovators.',
          applications: [
            'IC50 dose-response profiling in 3D perfused biochips',
            'Tissue penetration profiling of nanoparticles and nanocarriers',
            'ISO 10993-5 adapted biocompatibility assays',
            'Real-time cellular apoptosis and viability tracking',
          ],
        },
        {
          id: 'dispositivos-microfluidicos',
          code: '04',
          name: 'Microfluidic Biochip Devices',
          description:
            'Design, microfabrication, and delivery of custom microfluidic devices matching the experimental specifications of researchers.',
          targetAudience: 'Bioengineering labs, biophysics research, and industrial automation.',
          applications: [
            'CAD design and computational fluid dynamics (CFD) modeling',
            'Fabrication in optical-grade biocompatible elastomers (PDMS)',
            'Integrated cell trapping chambers for 3D spheroid culture',
            'Standard luer fittings ready for benchtop plug-and-play',
          ],
        },
        {
          id: 'consultoria-cientifica',
          code: '05',
          name: 'Scientific & Technical Consulting',
          description:
            'Strategic consulting for experimental design, protocol optimization, method standardization, and regulatory compliance.',
          targetAudience: 'Research directors, venture builders, and academic investigators.',
          applications: [
            'Design of predictive translational assays',
            'Methodological transition to 3Rs principles (animal replacement)',
            'Scientific dossier review for regulatory submissions',
            'Grant proposal technical refinement (FINEP, FAPERJ, CNPq)',
          ],
        },
        {
          id: 'capacitacao-tecnologica',
          code: '06',
          name: 'Technological Training & Courses',
          description:
            'Hands-on training and specialized courses on 3D cell culture protocols, microfluidic operations, and analytical interpretation.',
          targetAudience: 'Principal investigators, technicians, and postgraduate scholars.',
          applications: [
            'Practical workshop on 3D spheroid formation and maintenance',
            'Microfluidic circuit assembly and perfusion calibration training',
            'Confocal microscopy imaging of 3D biological specimens',
            'Custom in-company workshops for biotech enterprises',
          ],
        },
      ] as Solution[],
    },
    applications: {
      sectionTitle: 'Application Domains',
      title: 'One technological platform. Multiple frontiers.',
      subtitle:
        'Our multidisciplinary biotechnology infrastructure meets the most rigorous demands of human medicine, veterinary healthcare, and global industry.',
      list: [
        {
          id: 'medicina-personalizada',
          title: 'Personalized Medicine',
          subtitle: 'Translational Oncology & Patient-Derived Models',
          description:
            'Cultivating patient-derived microtumors inside microfluidic chips to assess individualized chemotherapy response. Our ongoing research aims to support rational, data-backed clinical drug selection.',
          image: '/src/assets/images/tumor_spheroid_3d_1792212593676.jpg',
          applications: [
            'Culturing patient-derived microtumors preserving native cell stroma',
            'Ex-vivo sensitivity and chemoresistance profiling',
            'Investigating synergistic combination regimens',
            'Generating preliminary evidence for clinical translational studies',
          ],
          workflow: [
            { step: 1, title: 'Biological Sample', desc: 'Cellular isolation and viability preservation from biopsy tissue.' },
            { step: 2, title: '3D Tumor Model', desc: 'Formation of uniform 3D spheroids within a bio-inspired hydrogel matrix.' },
            { step: 3, title: 'Experimental Screening', desc: 'Controlled exposure to therapeutic agents under biomimetic perfusion.' },
            { step: 4, title: 'Response Analysis', desc: 'Confocal assessment of apoptosis, cytotoxic index, and core viability.' },
            { step: 5, title: 'Scientific Report', desc: 'Consolidated dose-response analytics to inform clinical research.' },
          ],
          regulatoryNote:
            'Ethical and regulatory notice: Direct clinical diagnostic application constitutes a translational development goal, subject to analytical/clinical validation protocols and competent health regulatory clearances.',
        },
        {
          id: 'industria-farmaceutica',
          title: 'Pharmaceutical Industry',
          subtitle: 'Drug Discovery & Predictive Preclinical Assays',
          description:
            'A predictive platform for early-stage screening of small molecules and biologics, identifying efficacy and toxicological signals ahead of costly animal testing.',
          image: '/src/assets/images/organ_on_a_chip_device_1792212592652.jpg',
          applications: [
            'High-content phenotypic screening of novel therapeutic leads',
            'Quantitative determination of efficacy and therapeutic margins',
            'Assessment of combination therapies and multi-drug resistance',
            'Vascular transport and drug penetration through tissue barriers',
            'Non-animal alternative methods with superior human relevance',
          ],
        },
        {
          id: 'industria-cosmetica',
          title: 'Cosmetics Industry',
          subtitle: 'Advanced Bioassays & Animal Testing Replacement',
          description:
            'Ethical, high-content bioassays adhering to the 3Rs framework and modern safety regulations for personal care active ingredients.',
          image: '/src/assets/images/hero_spheroid_microfluidics_1792212591565.jpg',
          applications: [
            'Toxicological screening and biocompatibility of botanical ingredients',
            'Reconstructed 3D human skin model evaluation',
            'Irritation, epithelial barrier integrity, and oxidative stress tests',
            'Anti-aging and tissue regeneration efficacy benchmarks',
            'Complete compliance with international animal testing bans',
          ],
        },
        {
          id: 'medicina-veterinaria',
          title: 'Veterinary Medicine',
          subtitle: 'Animal Health & Integrated One Health Vision',
          description:
            'Adapting 3D models and microfluidics to veterinary oncology and comparative pathology, supporting companion animal therapeutics within an integrated One Health perspective.',
          image: '/src/assets/images/biotech_lab_perfusion_1792212592991.jpg',
          applications: [
            'Canine, feline, and equine 3D cell culture models',
            'Investigation of aggressive veterinary tumors (e.g. mastocytoma)',
            'Efficacy and safety screening for veterinary pharmaceuticals',
            'Comparative translational science bridging human and animal medicine',
            'Reduction and replacement of experimental animals in veterinary trials',
          ],
        },
      ] as ApplicationArea[],
    },
    team: {
      sectionTitle: 'Our Team',
      title: 'The minds driving the innovation.',
      subtitle:
        'Our interdisciplinary team unites scientists, engineers, and entrepreneurs to bridge fundamental research and real-world biotech solutions.',
      closingText: 'Innovation flourishes at the intersection of diverse disciplines, perspectives, and dedicated individuals.',
      validationNote: 'Institutional competence originating from the scientific and innovation ecosystem of Universidade Federal Fluminense (UFF).',
      leadership: {
        id: 'jessica-dornelas',
        name: 'Jéssica Dornelas',
        role: 'Founder & CEO',
        credentials: 'PhD in Science & Biotechnology',
        institution: 'Universidade Federal Fluminense (UFF)',
        specialty: 'Biomaterials, Nanotechnology, 3D Culture & Microfluidics',
        bio: 'Biotechnology researcher and entrepreneur with extensive expertise in biomaterials, healthcare nanotechnology, 3D cell culture models, and microfluidics. She spearheads NanoOnco3D strategic vision, bridging rigorous academic science, clinical partnerships, and technology innovation ventures.',
        linkedin: 'https://www.linkedin.com/in/jessicadornelas/',
        category: 'leadership',
      } as TeamMember,
      scientificTeam: [
        {
          id: 'adriany-lucas',
          name: 'Adriany Lucas',
          role: 'Biologist & Researcher',
          credentials: 'MSc in Microbiology',
          institution: 'Biomedical Research',
          specialty: 'Animal-derived 3D models and microbiological analysis',
          bio: 'Specialist in 3D biological models for host-pathogen interactions and veterinary applications, focusing on cell assay standardization.',
          category: 'scientific',
        },
        {
          id: 'joice-correa',
          name: 'Joice Corrêa',
          role: 'Pharmacist',
          credentials: 'BSc in Pharmacy',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: '3D tumor model production & Translational studies',
          bio: 'Focuses on the production, quality control, and testing of 3D tumor spheroids and chemotherapy response protocols.',
          category: 'scientific',
        },
        {
          id: 'gabrielly-macedo',
          name: 'Gabrielly Macedo',
          role: 'Pharmacist',
          credentials: 'BSc in Pharmacy',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Oncology protocols and chemotherapeutic regimens',
          bio: 'Coordinates oncology therapeutic regimens to inform drug response assays in patient-derived cellular systems.',
          category: 'scientific',
        },
        {
          id: 'jhonny-bonforte',
          name: 'Jhonny Bonforte',
          role: 'Technical Researcher',
          credentials: 'Biological Sciences',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Primary cell 3D model standardization',
          bio: 'Provides technical support for primary cell isolation, spheroid formation, and cellular viability quantification.',
          category: 'scientific',
        },
        {
          id: 'guilherme-dessen',
          name: 'Guilherme Dessen',
          role: 'Technical Researcher',
          credentials: 'Biological Sciences',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Microfluidic device fabrication and testing',
          bio: 'Operates microfabrication workflows, biochip assembly, and fluidic integrity testing.',
          category: 'scientific',
        },
        {
          id: 'joao-dantas',
          name: 'João Dantas',
          role: 'Nanotechnologist',
          credentials: 'MSc in Nanotechnology Engineering',
          institution: 'UFRJ / UFF',
          specialty: 'Biochip development, simulation, and surface characterization',
          bio: 'Expert in microchannel design, computational fluid dynamics (CFD) simulation, and polymer surface characterization for biomedical devices.',
          category: 'scientific',
        },
      ] as TeamMember[],
      advisors: [
        {
          id: 'gutemberg-alves',
          name: 'Dr. Gutemberg Alves',
          role: 'Scientific Advisor & Technology Collaborator',
          credentials: 'PhD in Biochemistry (UFRJ) | Full Professor UFF',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Biochemistry, Cell Culture & Material Biocompatibility',
          bio: 'Senior investigator with extensive publication record in biomaterials, cytotoxicity, and tissue response, guiding core R&D platforms.',
          category: 'advisor',
        },
        {
          id: 'andrea-baptista',
          name: 'Dra. Andrea Baptista',
          role: 'Scientific Advisor & Technology Collaborator',
          credentials: 'PhD in Biosciences (UNESP) | Full Professor UFF',
          institution: 'Universidade Federal Fluminense (UFF)',
          specialty: 'Biosciences, Immunology & Translational Assays',
          bio: 'Full professor specializing in immunology and experimental bio-models, overseeing scientific validation standards.',
          category: 'advisor',
        },
      ] as TeamMember[],
    },
    differentials: {
      sectionTitle: 'Competitive Advantages',
      title: 'Why collaborate with NanoOnco3D?',
      subtitle: 'Combining multidisciplinary depth to generate solid empirical evidence and tangible impact.',
      items: [
        {
          id: 'diff-1',
          title: 'Integrated Technologies',
          desc: 'Seamless convergence of 3D biology, microfluidics, and digital automation into dynamic perfused platforms.',
        },
        {
          id: 'diff-2',
          title: 'High Customization',
          desc: 'Bespoke experimental architectures engineered to address the specific biological challenge of each project.',
        },
        {
          id: 'diff-3',
          title: 'Scientific Expertise',
          desc: 'A team of PhD and MSc scientists spanning biotechnology, pharmacology, biochemistry, and bioengineering.',
        },
        {
          id: 'diff-4',
          title: 'Advanced Biological Models',
          desc: 'Overcoming 2D limitations through realistic cell-matrix gradients, shear dynamics, and 3D physiological barriers.',
        },
        {
          id: 'diff-5',
          title: 'National DeepTech Development',
          desc: 'Proprietary Brazilian bioengineering strengthening scientific sovereignty and reducing international supply dependencies.',
        },
        {
          id: 'diff-6',
          title: 'One Health Commitment',
          desc: 'A unified translational paradigm recognizing the unbreakable link between human, veterinary, and environmental health.',
        },
      ],
    },
    roadmap: {
      sectionTitle: 'Innovation Roadmap',
      title: 'Our journey of scientific innovation',
      subtitle: 'From academic research to a consolidated DeepTech platform with translational impact.',
      milestones: [
        {
          year: '2021',
          title: 'Technological Genesis',
          description: 'Initial R&D and scientific entrepreneurship in the fields of biomaterials and 3D cellular constructs.',
          status: 'completed',
          deliverables: ['Conceptual platform definition', 'Initial spheroid culture protocols'],
        },
        {
          year: '2022',
          title: 'Structuring & UFF Integration',
          description: 'Formal organization of NanoOnco3D and integration into the innovation ecosystem of UFF.',
          status: 'completed',
          deliverables: ['Corporate registration', 'Academic incubation and lab cooperation'],
        },
        {
          year: '2023',
          title: 'Microfluidic Advancements',
          description: 'Design of first-generation biochip matrices and participation in national healthcare innovation competitions.',
          status: 'completed',
          deliverables: ['Microchannel prototyping', 'Dynamic perfusion bioassays'],
        },
        {
          year: '2024',
          title: 'Partnerships & 3D Optimization',
          description: 'Consolidation of inter-institutional agreements and refinement of reproducible 3D tumor models.',
          status: 'completed',
          deliverables: ['Standardized tumor spheroid SOPs', 'Formal collaboration with research centers'],
        },
        {
          year: '2025',
          title: 'R&D Scaling',
          description: 'Expansion of microfluidic fabrication runs, broader contract testing portfolio, and customized project deliveries.',
          status: 'completed',
          deliverables: ['Extended validation assays', 'On-demand testing for industrial partners'],
        },
        {
          year: '2026+',
          title: 'Automation & Global Expansion',
          description: 'Advance in automation hardware, biosensor integration, intellectual property protection, and regulatory scaling.',
          status: 'future',
          deliverables: [
            'Physical integration of analytical biosensors',
            'Embedded closed-loop perfusion controllers',
            'AI-assisted morphometric image analysis',
            'Regulatory clinical validation & international expansion',
          ],
        },
      ] as RoadmapMilestone[],
    },
    ecosystem: {
      sectionTitle: 'Ecosystem & Partnerships',
      title: 'Innovation thrives through collaborative networks.',
      subtitle:
        'NanoOnco3D advances its pipeline in connection with premier scientific institutions, innovation hubs, and research programs.',
      ctaPartner: 'Become a Partner',
      categories: [
        {
          title: 'Scientific & Academic Institutions',
          description: 'Centres of academic excellence and biomedical research.',
          partners: [
            { name: 'Universidade Federal Fluminense (UFF)', role: 'Scientific origin & R&D collaboration', category: 'scientific' },
            { name: 'Hospital Universitário Antônio Pedro (HUAP/UFF)', role: 'Clinical research & translational oncology', category: 'scientific' },
            { name: 'Centro Brasileiro de Pesquisas Físicas (CBPF)', role: 'Advanced materials & physical instrumentation', category: 'scientific' },
            { name: 'Universidade de Brasília (UnB)', role: 'Academic research exchange', category: 'scientific' },
            { name: 'CTI Renato Archer', role: 'Information technology & microfabrication', category: 'scientific' },
            { name: 'LaNBDA / UNICAMP', role: 'Nanobiotechnology & bioanalytical devices', category: 'scientific' },
          ] as PartnerOrg[],
        },
        {
          title: 'Innovation Hubs & Accelerators',
          description: 'Entrepreneurship incubation and deeptech development programs.',
          partners: [
            { name: 'AGIR / UFF', role: 'UFF Innovation Agency', category: 'innovation' },
            { name: 'CTI-Tec', role: 'CTI Technology Incubator', category: 'innovation' },
            { name: 'InovaHC', role: 'Hospital das Clínicas Technology Innovation Center', category: 'innovation' },
            { name: 'SEBRAE', role: 'DeepTech business scaling and acceleration', category: 'innovation' },
          ] as PartnerOrg[],
        },
        {
          title: 'Collaborations & Projects',
          description: 'Biological materials and advanced biomaterials partners.',
          partners: [
            { name: 'Rio de Janeiro Cell Bank (BCRJ)', role: 'Certified cell lines & biological quality assurance', category: 'collaboration' },
            { name: 'Matech Brasil', role: 'Biomaterials engineering collaboration', category: 'collaboration' },
          ] as PartnerOrg[],
        },
      ],
      fundingAgencies: ['FAPERJ', 'FINEP', 'CNPq', 'CAPES'],
    },
    knowledge: {
      sectionTitle: 'Research & Insights',
      title: 'Knowledge powering scientific discovery.',
      subtitle:
        'Explore conceptual reviews, technical papers, and articles on 3D biological models, microfluidics, and translational bioassays.',
      articles: [
        {
          id: 'art-1',
          category: '3D Cell Culture',
          title: 'Multicellular Tumor Spheroids vs 2D Monolayers in Chemotherapy Predictability',
          date: 'February 2026',
          readTime: '6 min read',
          summary:
            'A comparative analysis on how 3D oxygen gradients and extracellular matrix density reduce false positives in oncology drug screening.',
          content:
            'For decades, oncology drug discovery has relied heavily on flat 2D monolayer cultures. However, 2D cells lack natural diffusion barriers, hypoxia gradients, and 3D cell-matrix contacts. Spheroids recreate the proliferative rim, intermediate quiescent zone, and hypoxic core, recapitulating true solid tumor chemoresistance.',
          author: 'NanoOnco3D Scientific Team',
        },
        {
          id: 'art-2',
          category: 'Microfluidics & Organ-on-Chip',
          title: 'The Physiological Impact of Shear Stress on Microvascular Maturation in Biochips',
          date: 'January 2026',
          readTime: '5 min read',
          summary:
            'How laminar continuous perfusion in 200 µm microchannels regulates endothelial alignment and drug barrier permeability.',
          content:
            'Continuous fluid perfusion introduces essential biomechanical cues. Shear stress triggers mechanosensitive gene cascades, tight junction stabilization, and efflux transporter activation, bridging the gap between benchtop models and in vivo hemodynamics.',
          author: 'NanoOnco3D Device Engineering',
        },
        {
          id: 'art-3',
          category: 'Translational Medicine',
          title: '3Rs Principles in Life Sciences: Reduction, Refinement, and Replacement via Biochips',
          date: 'December 2025',
          readTime: '4 min read',
          summary:
            'Strategic implementation of non-animal approach methodologies (NAMs) for drug and cosmetic safety assessments.',
          content:
            'International regulatory shifts (including FDA Modernization Act 2.0 and OECD guidelines) prioritize human-relevant NAMs. Organ-on-a-Chip and 3D models provide reproducible mechanistic toxicology with zero animal sacrifice.',
          author: 'NanoOnco3D Scientific Advisory',
        },
      ] as NewsItem[],
    },
    contact: {
      sectionTitle: 'Contact & Proposals',
      title: 'Let’s engineer new solutions together.',
      subtitle:
        'Whether you seek 3D cell culture services, custom microfluidic devices, or translational oncology models, our team is ready to evaluate your goals.',
      corporateInfo: {
        company: 'NanoOnco3D Biotechnology',
        website: 'https://www.nanoonco3d.com.br',
        email: 'dornelas.jessica@nanoonco3d.com.br',
        phone: '+55 (21) 98228-5680',
        phoneFormatted: '+55 21 98228-5680',
        whatsappUrl: 'https://wa.me/5521982285680?text=Hello!%20I%20would%20like%20to%20learn%20more%20about%20NanoOnco3D%20solutions.',
        linkedinUrl: 'https://www.linkedin.com/company/nanoonco3d/',
        location: 'Niterói / Rio de Janeiro, Brazil',
      },
      form: {
        title: 'Project Proposal & Partnership Inquiry',
        fullName: 'Full name',
        organization: 'Company or research institution',
        email: 'Professional email',
        phone: 'Phone / WhatsApp',
        interestArea: 'Area of interest',
        desiredService: 'Desired service',
        message: 'Briefly describe your project challenge or biological objectives',
        consent: 'I agree to the processing of my contact data for commercial and technical follow-up by NanoOnco3D.',
        submitButton: 'Submit Request',
        submittingButton: 'Sending details...',
        successTitle: 'Inquiry received successfully!',
        successMessage:
          'Thank you for reaching out. Our scientific leadership will contact you within 48 business hours to schedule an introductory technical call.',
        sendAnother: 'Send another message',
      },
      interestOptions: [
        'Personalized medicine & Oncology',
        'Pharmaceutical industry (Preclinical screening)',
        'Cosmetics industry & Safety testing (3Rs)',
        'Veterinary medicine & Animal health',
        'Academic and scientific research',
        'Custom microfluidic device fabrication',
        'Institutional partnerships & R&D cooperation',
        'Other',
      ],
      serviceOptions: [
        '01 — On-Demand Research & Development',
        '02 — 3D Cellular Model Development',
        '03 — Active Ingredient & Nanosystem Screening',
        '04 — Microfluidic Biochip Devices',
        '05 — Scientific & Technical Consulting',
        '06 — Technological Training & Courses',
        'Institutional Partnership or R&D Cooperation',
      ],
    },
    footer: {
      tagline: 'Science and technology to transform the future of healthcare.',
      quickLinksTitle: 'Navigation',
      solutionsTitle: 'Solutions',
      contactTitle: 'Official Contact',
      copyright: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy & LGPD',
      cookiesPolicy: 'Cookie Policy',
      termsOfUse: 'Terms of Use',
    },
  },
};
