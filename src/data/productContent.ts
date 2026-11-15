export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  label: string;
  fit: 'contain' | 'cover';
}

export interface AttachmentItem {
  id: 'bola' | 'garfo' | 'plana' | 'conica';
  name: string;
  description: string;
  imageSrc: string;
  cropClass: string;
}

export interface SpeedLevel {
  level: number;
  label: string;
  focus: string;
}

export interface UsageStep {
  step: string;
  title: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PolicyItem {
  id: 'prazos' | 'trocas' | 'privacidade' | 'termos';
  label: string;
  title: string;
  content: string[];
}

/**
 * URL padrão do checkout externo.
 * Basta substituir por sua URL final de pagamento antes da publicação.
 */
export const CHECKOUT_URL = 'https://pay.kaiross.com.br/DDJmxgB9Hz9x';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'kit-principal',
    src: '/assets/aistudio/image_652d8a11.png',
    alt: 'Pistola massageadora RELAXPRO preta com detalhe dourado e quatro ponteiras intercambiáveis',
    label: 'Aparelho + Kit',
    fit: 'contain'
  },
  {
    id: 'painel-digital',
    src: '/assets/aistudio/image_f3fffa68.png',
    alt: 'Pistola massageadora RELAXPRO com visor digital exibindo 6 velocidades e porta USB',
    label: 'Visor 6 Níveis',
    fit: 'cover'
  },
  {
    id: 'uso-musculatura',
    src: '/assets/aistudio/image_ff0bde41.png',
    alt: 'Pessoa aplicando a pistola massageadora RELAXPRO na musculatura da perna em casa',
    label: 'Em Uso',
    fit: 'cover'
  },
  {
    id: 'quatro-ponteiras',
    src: '/assets/aistudio/image_3fb30182.png',
    alt: 'Quatro ponteiras intercambiáveis da RELAXPRO: Bola, Garfo, Plana e Cônica',
    label: '4 Ponteiras',
    fit: 'contain'
  }
];

export const HERO_BULLETS: string[] = [
  '6 níveis de velocidade ajustáveis.',
  '4 ponteiras diferentes para múltiplos grupos musculares.',
  'Bateria com duração aproximada de 3 horas.',
  'Aparelho Bivolt 110/220V com carregamento USB.'
];

export const SPEED_LEVELS: SpeedLevel[] = [
  {
    level: 1,
    label: 'Nível 1',
    focus: 'Toque inicial suave para adaptação muscular e relaxamento leve.'
  },
  {
    level: 2,
    label: 'Nível 2',
    focus: 'Intensidade moderada-baixa para aliviar a tensão cotidiana após o trabalho.'
  },
  {
    level: 3,
    label: 'Nível 3',
    focus: 'Ritmo equilibrado para uso geral em ombros, braços e pernas.'
  },
  {
    level: 4,
    label: 'Nível 4',
    focus: 'Pulso firme para soltar regiões mais carregadas pela mesma postura.'
  },
  {
    level: 5,
    label: 'Nível 5',
    focus: 'Intensidade elevada para grandes grupos musculares e recuperação pós-esforço.'
  },
  {
    level: 6,
    label: 'Nível 6',
    focus: 'Potência máxima para aplicações mais intensas conforme sua preferência.'
  }
];

export const ATTACHMENTS: AttachmentItem[] = [
  {
    id: 'bola',
    name: 'Bola',
    description: 'para grandes grupos musculares.',
    imageSrc: '/assets/aistudio/image_3fb30182.png',
    cropClass: 'w-[360%] -left-[11%]'
  },
  {
    id: 'garfo',
    name: 'Garfo',
    description: 'para aplicações direcionadas.',
    imageSrc: '/assets/aistudio/image_3fb30182.png',
    cropClass: 'w-[360%] -left-[103%]'
  },
  {
    id: 'plana',
    name: 'Plana',
    description: 'para áreas musculares amplas.',
    imageSrc: '/assets/aistudio/image_3fb30182.png',
    cropClass: 'w-[400%] -left-[222%]'
  },
  {
    id: 'conica',
    name: 'Cônica',
    description: 'para pontos localizados.',
    imageSrc: '/assets/aistudio/image_3fb30182.png',
    cropClass: 'w-[460%] -left-[355%]'
  }
];

export const USAGE_STEPS: UsageStep[] = [
  {
    step: '01',
    title: 'Escolha a ponteira adequada para a região desejada.'
  },
  {
    step: '02',
    title: 'Encaixe corretamente no aparelho.'
  },
  {
    step: '03',
    title: 'Ligue e selecione uma das 6 velocidades.'
  },
  {
    step: '04',
    title: 'Aplique suavemente sobre a musculatura, seguindo as orientações de uso.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'velocidades',
    question: 'A RelaxPro possui quantas velocidades?',
    answer: 'São 6 níveis de velocidade ajustáveis.'
  },
  {
    id: 'bateria',
    question: 'Quanto tempo dura a bateria?',
    answer: 'Aproximadamente 3 horas, dependendo da intensidade de utilização.'
  },
  {
    id: 'regioes',
    question: 'Posso usar em diferentes regiões musculares?',
    answer: 'Sim, as 4 ponteiras inclusas atendem a diferentes grupos musculares.'
  },
  {
    id: 'sem-fio',
    question: 'O aparelho é sem fio?',
    answer: 'Sim, possui bateria recarregável interna e carregamento USB.'
  },
  {
    id: 'bivolt',
    question: 'É bivolt?',
    answer: 'Sim, compatível com redes 110V e 220V.'
  },
  {
    id: 'bonus',
    question: 'O Mini Massageador AMT é pago à parte?',
    answer: 'Sim! Ele é um item adicional opcional no valor de R$ 37,89, também com frete grátis para complementar seu pedido.'
  }
];

export const FOOTER_POLICIES: PolicyItem[] = [
  {
    id: 'prazos',
    label: 'Prazos de Entrega',
    title: 'Prazos de Entrega e Rastreamento',
    content: [
      'Os pedidos confirmados são processados em até 2 dias úteis após a aprovação do pagamento.',
      'O prazo estimado de entrega varia conforme o CEP informado na etapa de finalização e pode ser acompanhado pelo código de rastreamento enviado ao seu e-mail.'
    ]
  },
  {
    id: 'trocas',
    label: 'Trocas e Garantia',
    title: 'Política de Trocas, Devoluções e Garantia',
    content: [
      'Você conta com 7 dias corridos após o recebimento para solicitar devolução por arrependimento, conforme o Código de Defesa do Consumidor, desde que o produto e seus acessórios estejam completos.',
      'Em caso de defeito de fabricação, oferecemos suporte para troca ou garantia mediante contato com o atendimento ao cliente informando o número do pedido.'
    ]
  },
  {
    id: 'privacidade',
    label: 'Política de Privacidade',
    title: 'Política de Privacidade',
    content: [
      'Os dados informados no momento da compra são utilizados exclusivamente para processamento do pedido, faturamento, envio e atendimento ao cliente.',
      'Não comercializamos nem compartilhamos suas informações pessoais com terceiros alheios à logística e ao meio de pagamento.'
    ]
  },
  {
    id: 'termos',
    label: 'Termos de Uso',
    title: 'Termos de Uso e Avisos Legais',
    content: [
      'A Pistola Massageadora RELAXPRO e o Mini Massageador AMT são equipamentos portáteis voltados ao relaxamento muscular e bem-estar diário, não substituindo diagnóstico, tratamento médico ou fisioterapêutico.',
      'Oferta promocional válida enquanto durarem os estoques do kit com bônus incluso.'
    ]
  }
];
