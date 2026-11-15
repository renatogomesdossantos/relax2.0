import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  BatteryCharging,
  Check,
  ChevronDown,
  Gauge,
  Mail,
  PlugZap,
  PlusCircle,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Truck,
  X
} from 'lucide-react';
import { ProductImage } from './components/ProductImage';
import {
  ATTACHMENTS,
  CHECKOUT_URL,
  FAQ_ITEMS,
  FOOTER_POLICIES,
  GALLERY_ITEMS,
  HERO_BULLETS,
  SPEED_LEVELS,
  USAGE_STEPS,
  type PolicyItem
} from './data/productContent';

const MAIN_PRICE = 98.67;
const BONUS_PRICE = 37.89;
const SOLO_COMPARE_PRICE = 113.47;
const BUNDLE_COMPARE_PRICE = 151.36;

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

export default function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSpeed, setSelectedSpeed] = useState(3);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [showStickyMobileCta, setShowStickyMobileCta] = useState(false);
  const [includeBonus, setIncludeBonus] = useState(true);
  const [activePolicy, setActivePolicy] = useState<PolicyItem | null>(null);

  const activeImage = GALLERY_ITEMS[selectedImageIndex];
  const activeSpeed = SPEED_LEVELS.find((s) => s.level === selectedSpeed) ?? SPEED_LEVELS[0];
  const totalAmount = includeBonus ? MAIN_PRICE + BONUS_PRICE : MAIN_PRICE;
  const compareAmount = includeBonus ? BUNDLE_COMPARE_PRICE : SOLO_COMPARE_PRICE;

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyMobileCta(window.scrollY > 560);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#F8FAFC]">
      {/* Cabeçalho Single-Product Enxuto */}
      <header className="bg-[#16191D] border-b border-[#262B33]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-8">
          <a
            href="#primeira-dobra"
            className="font-display text-lg font-extrabold tracking-tight text-[#F8FAFC] whitespace-nowrap shrink-0"
          >
            RELAXPRO
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94A3B8]">
            <a
              href="#velocidades"
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
            >
              6 Velocidades
            </a>
            <a
              href="#ponteiras"
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
            >
              4 Ponteiras
            </a>
            <a
              href="#bonus"
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
            >
              Mini AMT
            </a>
            <a
              href="#faq"
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
            >
              Dúvidas
            </a>
          </nav>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#00FF88] hover:bg-[#26FF9A] text-[#0B0D0E] text-xs font-bold shadow-[0_0_16px_rgba(0,255,136,0.28)] hover:shadow-[0_0_22px_rgba(0,255,136,0.45)] transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00FF88]"
          >
            Garantir Oferta
          </a>
        </div>
      </header>

      <main className="pb-24 md:pb-16">
        {/* BLOCO 1: PRIMEIRA DOBRA */}
        <section
          id="primeira-dobra"
          className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-5 sm:pt-10 pb-10 sm:pb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Galeria à esquerda (Desktop) / Topo (Mobile) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3] flex items-center justify-center">
                <ProductImage
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className={
                    activeImage.fit === 'cover'
                      ? 'w-full h-full object-cover'
                      : 'w-full h-full object-contain p-4 sm:p-8 bg-[#FFFFFF]'
                  }
                />
              </div>

              <div
                className="grid grid-cols-4 gap-2.5 sm:gap-3"
                role="tablist"
                aria-label="Galeria de fotos da RELAXPRO"
              >
                {GALLERY_ITEMS.map((item, idx) => {
                  const isActive = idx === selectedImageIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={item.label}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`group bg-[#16191D] rounded-xl overflow-hidden border transition-all cursor-pointer min-h-[64px] sm:min-h-[84px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00FF88] ${
                        isActive
                          ? 'border-[#00FF88] ring-2 ring-[#00FF88]/25'
                          : 'border-[#262B33] hover:border-[#475569]'
                      }`}
                    >
                      <div
                        className={`aspect-square sm:aspect-[4/3] w-full overflow-hidden ${
                          item.fit === 'cover' ? 'bg-[#0B0D0E]' : 'bg-[#FFFFFF]'
                        }`}
                      >
                        <ProductImage
                          src={item.src}
                          alt={item.label}
                          className={
                            item.fit === 'cover'
                              ? 'w-full h-full object-cover'
                              : 'w-full h-full object-contain p-1.5'
                          }
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ficha Comercial à direita (Desktop) / Abaixo da galeria (Mobile) */}
            <div className="lg:col-span-5 bg-[#16191D] border border-[#262B33] rounded-2xl p-5 sm:p-8 space-y-5">
              <p className="text-xs font-semibold tracking-wide text-[#00FF88]">
                RELAXPRO — Tecnologia para seu bem-estar
              </p>

              <h1 className="font-display text-[26px] sm:text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#F8FAFC]">
                Seu dia já acabou. Por que seu corpo ainda está trabalhando?
              </h1>

              <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
                Você não precisa terminar todo dia com o corpo tensionado. Conheça a RelaxPro: 6
                velocidades ajustáveis, ponteiras intercambiáveis e bateria recarregável para uma
                massagem prática no conforto da sua casa.
              </p>

              <ul className="space-y-2.5 pt-1">
                {HERO_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#F8FAFC]">
                    <Check
                      className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#262B33] space-y-1.5">
                <p className="text-sm text-[#94A3B8] tabular-nums">
                  De: <span className="line-through">R$ 113,47</span>
                </p>
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#00FF88] tabular-nums">
                    Por: R$ 98,67
                  </p>
                  <span className="text-sm font-medium text-[#94A3B8]">(ou em até 12x)</span>
                </div>
                <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00FF88]">
                  <Truck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Frete: Grátis</span>
                </p>
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[54px] px-6 py-3.5 rounded-xl bg-[#00FF88] hover:bg-[#26FF9A] active:scale-[0.99] text-[#0B0D0E] font-display text-sm sm:text-base font-bold tracking-wide shadow-[0_0_22px_rgba(0,255,136,0.28)] hover:shadow-[0_0_30px_rgba(0,255,136,0.45)] transition-all flex items-center justify-center text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00FF88]"
              >
                QUERO CONHECER A RELAXPRO!
              </a>
            </div>
          </div>
        </section>

        {/* BLOCO 2: O PROBLEMA (A Tensão Acumulada) */}
        <section id="problema" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 min-h-[260px] sm:min-h-[340px] bg-[#0B0D0E]">
              <ProductImage
                src="/assets/aistudio/image_4a61bee9.png"
                alt="Pessoa sentada no sofá com expressão de cansaço segurando a região do pescoço e ombros"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4">
              <p className="text-xs font-semibold text-[#94A3B8]">O Problema</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#F8FAFC]">
                Você passa o dia inteiro resolvendo tudo. E quando chega em casa?
              </h2>
              <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
                Trabalho, correria, tarefas e horas na mesma posição. Quando finalmente chega a
                hora de descansar, você ainda sente aquela tensão muscular acumulada. Seu momento
                de descanso também merece atenção.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO 3: A SOLUÇÃO (RelaxPro) */}
        <section id="solucao" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <p className="text-xs font-semibold text-[#00FF88]">A Solução</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#F8FAFC]">
                Sua massagem, no seu tempo e do seu jeito.
              </h2>
              <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
                Com a RelaxPro, você tem um aparelho portátil para massagear diferentes regiões
                musculares, escolhendo a intensidade que prefere. Sem precisar depender de outra
                pessoa para ter esse momento de cuidado.
              </p>
            </div>

            <div className="lg:col-span-6 min-h-[260px] sm:min-h-[340px] bg-[#0B0D0E] order-1 lg:order-2">
              <ProductImage
                src="/assets/aistudio/image_4a1fcdd6.png"
                alt="Pistola massageadora RELAXPRO em uso relaxante no ombro em ambiente doméstico"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* BLOCO 4: SEIS VELOCIDADES AJUSTÁVEIS */}
        <section id="velocidades" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 bg-[#FFFFFF] border-b lg:border-b-0 lg:border-r border-[#262B33] p-6 sm:p-8 flex items-center justify-center">
              <div className="w-full max-w-[360px] aspect-square overflow-hidden rounded-xl">
                <ProductImage
                  src="/assets/aistudio/image_5f08127d.png"
                  alt="Detalhe do painel traseiro da RELAXPRO destacando o controle de velocidades por LED"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#94A3B8]">
                  <SlidersHorizontal className="w-4 h-4 text-[#00FF88]" aria-hidden="true" />
                  <span>Controle de Intensidade</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#F8FAFC]">
                  Não é você que precisa se adaptar à massagem.
                </h2>
                <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
                  Ajuste entre os 6 níveis de velocidade disponíveis e escolha a intensidade conforme
                  sua preferência e conforto para cada momento do dia.
                </p>
              </div>

              {/* Seletor Interativo das 6 Velocidades */}
              <div className="space-y-3">
                <div
                  className="grid grid-cols-3 sm:grid-cols-6 gap-2"
                  role="tablist"
                  aria-label="Níveis de velocidade RELAXPRO"
                >
                  {SPEED_LEVELS.map((item) => {
                    const isSelected = item.level === selectedSpeed;
                    return (
                      <button
                        key={item.level}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedSpeed(item.level)}
                        className={`min-h-[46px] rounded-xl border text-sm font-mono font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00FF88] ${
                          isSelected
                            ? 'bg-[#00FF88] border-[#00FF88] text-[#0B0D0E] shadow-[0_0_14px_rgba(0,255,136,0.3)]'
                            : 'bg-[#0B0D0E] border-[#262B33] text-[#F8FAFC] hover:border-[#475569]'
                        }`}
                      >
                        {item.level}
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-xl bg-[#0B0D0E] border border-[#262B33] p-4 flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-[#00FF88] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-0.5">
                    <p className="text-xs font-semibold text-[#F8FAFC] tabular-nums">
                      {activeSpeed.label} de 6 selecionado
                    </p>
                    <p className="text-sm text-[#94A3B8]">{activeSpeed.focus}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 5: QUATRO PONTEIRAS, DIFERENTES EXPERIÊNCIAS */}
        <section id="ponteiras" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold text-[#94A3B8]">Kit Completo de Aplicações</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#F8FAFC]">
              Cada região merece uma atenção diferente.
            </h2>
            <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
              A RelaxPro acompanha quatro formatos de ponteira desenvolvidos para aplicações
              específicas:
            </p>
          </div>

          {/* Grid com 4 imagens das ponteiras */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {ATTACHMENTS.map((attachment) => (
              <article
                key={attachment.id}
                className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-[#FFFFFF] border-b border-[#262B33] overflow-hidden">
                  <ProductImage
                    src={attachment.imageSrc}
                    alt={`Ponteira ${attachment.name} da RELAXPRO`}
                    className={`absolute top-1/2 -translate-y-1/2 max-w-none h-auto ${attachment.cropClass}`}
                  />
                </div>
                <div className="p-4 sm:p-5 space-y-1">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#F8FAFC]">
                    {attachment.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {attachment.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Referência visual do encaixe no aparelho */}
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-full sm:w-56 aspect-[4/3] bg-[#FFFFFF] rounded-xl overflow-hidden shrink-0">
              <ProductImage
                src="/assets/aistudio/image_652d8a11.png"
                alt="Pistola RELAXPRO com ponteira encaixada e demais ponteiras abaixo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <p className="font-display text-base font-bold text-[#F8FAFC]">
                Troca rápida por encaixe direto
              </p>
              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xl">
                Encaixe e substitua entre as ponteiras Bola, Garfo, Plana e Cônica em segundos para
                adaptar o contato da RELAXPRO à região do corpo que você deseja massagear.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCO 6: BATERIA PARA ACOMPANHAR SUA ROTINA */}
        <section id="bateria" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5 order-2 lg:order-1">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#00FF88]">Autonomia e Praticidade</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#F8FAFC]">
                  Chega de depender de uma tomada durante a massagem.
                </h2>
                <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
                  A bateria oferece aproximadamente 3 horas de funcionamento contínuo, conforme as
                  condições de uso. E o sistema bivolt facilita o carregamento em diferentes
                  ambientes via USB.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl bg-[#0B0D0E] border border-[#262B33] p-4 space-y-1">
                  <BatteryCharging className="w-5 h-5 text-[#00FF88]" aria-hidden="true" />
                  <p className="font-display text-lg font-bold text-[#F8FAFC] tabular-nums">
                    ~3 horas
                  </p>
                  <p className="text-xs text-[#94A3B8]">de uso contínuo sem fios</p>
                </div>

                <div className="rounded-xl bg-[#0B0D0E] border border-[#262B33] p-4 space-y-1">
                  <PlugZap className="w-5 h-5 text-[#00FF88]" aria-hidden="true" />
                  <p className="font-display text-lg font-bold text-[#F8FAFC] tabular-nums">
                    Bivolt USB
                  </p>
                  <p className="text-xs text-[#94A3B8]">compatível com 110V / 220V</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 min-h-[260px] sm:min-h-[340px] bg-[#0B0D0E] grid grid-cols-1 sm:grid-cols-2 border-b lg:border-b-0 lg:border-l border-[#262B33] order-1 lg:order-2">
              <div className="h-full min-h-[220px] bg-[#0B0D0E]">
                <ProductImage
                  src="/assets/aistudio/image_4a1fcdd6.png"
                  alt="Uso sem fios da RELAXPRO em ambiente confortável"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-full min-h-[220px] bg-[#FFFFFF] flex items-center justify-center p-4 border-t sm:border-t-0 sm:border-l border-[#262B33]">
                <ProductImage
                  src="/assets/aistudio/image_5f08127d.png"
                  alt="Entrada de carregamento USB e indicador luminoso da bateria na RELAXPRO"
                  className="w-full h-full max-h-[260px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 7: COMO USAR */}
        <section id="como-usar" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 min-h-[260px] sm:min-h-[360px] bg-[#0B0D0E]">
              <ProductImage
                src="/assets/aistudio/image_ff0bde41.png"
                alt="Pessoa aplicando a RELAXPRO suavemente sobre a musculatura da perna"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#94A3B8]">Passo a Passo</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#F8FAFC]">
                  Começar é simples e prático.
                </h2>
              </div>

              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {USAGE_STEPS.map((item) => (
                  <li
                    key={item.step}
                    className="rounded-xl bg-[#0B0D0E] border border-[#262B33] p-4 space-y-1.5"
                  >
                    <span className="font-mono text-xs font-semibold text-[#00FF88] tabular-nums">
                      {item.step}.
                    </span>
                    <p className="text-sm font-medium text-[#F8FAFC] leading-relaxed">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="rounded-xl bg-[#0B0D0E] border border-[#262B33] p-4 flex items-start gap-3">
                <AlertTriangle
                  className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">Aviso de Segurança:</strong> Evite utilizar
                  sobre ossos, feridas ou regiões lesionadas. Em caso de dúvida, procure
                  orientação profissional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 8: BÔNUS COMPLEMENTAR PAGO (R$ 37,89 · FRETE GRÁTIS) */}
        <section id="bonus" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-[#00FF88]">
                <PlusCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>OFERTA COMPLEMENTAR EXCLUSIVA</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#F8FAFC]">
                Complete seu kit com o Mini Massageador Elétrico AMT por R$ 37,89!
              </h2>

              <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed">
                Além da sua pistola RelaxPro por{' '}
                <strong className="font-semibold text-[#00FF88] tabular-nums">R$ 98,67</strong> com
                frete grátis, você pode adicionar o{' '}
                <strong className="font-semibold text-[#F8FAFC]">
                  Mini Massageador Elétrico Portátil Recarregável (Eletroterapia para Pescoço e
                  Perna — Bivolt)
                </strong>{' '}
                por apenas{' '}
                <strong className="font-semibold text-[#00FF88] tabular-nums">R$ 37,89</strong> com
                frete grátis para potencializar ainda mais seus cuidados diários.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#94A3B8]">
                <span className="inline-flex items-center gap-1.5 text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#00FF88]" aria-hidden="true" />
                  Adicional exclusivo: R$ 37,89
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#00FF88] font-semibold">Frete: Grátis</span>
              </div>

              {/* Botão para incluir/remover do pedido */}
              <div>
                <button
                  type="button"
                  onClick={() => setIncludeBonus(!includeBonus)}
                  className={`min-h-[46px] px-5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center gap-2 ${
                    includeBonus
                      ? 'bg-[#00FF88] border-[#00FF88] text-[#0B0D0E] shadow-[0_0_18px_rgba(0,255,136,0.3)]'
                      : 'bg-[#0B0D0E] border-[#262B33] text-[#F8FAFC] hover:border-[#00FF88]/60'
                  }`}
                >
                  <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>
                    {includeBonus
                      ? 'Mini Massageador AMT incluído (+ R$ 37,89)'
                      : 'Incluir Mini Massageador AMT (+ R$ 37,89)'}
                  </span>
                </button>
              </div>
            </div>

            {/* Apoio Visual Combinado: RelaxPro + Mini Massageador AMT */}
            <div className="lg:col-span-6 bg-[#0B0D0E] border-t lg:border-t-0 lg:border-l border-[#262B33] p-6 sm:p-8 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-[#94A3B8]">
                  Monte sua configuração de compra
                </span>
                <span className="bg-[#16191D] border border-[#00FF88]/40 text-[#00FF88] text-[11px] font-display font-bold tracking-wide px-3 py-1.5 rounded-md whitespace-nowrap shrink-0">
                  FRETE GRÁTIS NOS 2 ITENS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
                <div className="bg-[#16191D] border border-[#262B33] rounded-xl p-4 flex flex-col justify-between gap-3">
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-[#FFFFFF] p-2">
                    <ProductImage
                      src="/assets/aistudio/image_652d8a11.png"
                      alt="Pistola Massageadora RELAXPRO 6 Velocidades com 4 Ponteiras"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="border-t border-[#262B33] pt-2.5 space-y-0.5">
                    <p className="font-display text-xs sm:text-sm font-bold text-[#F8FAFC]">
                      Pistola RELAXPRO
                    </p>
                    <p className="text-xs font-bold text-[#00FF88] tabular-nums">
                      R$ 98,67
                    </p>
                    <p className="text-[11px] text-[#94A3B8]">Frete: Grátis</p>
                  </div>
                </div>

                <div
                  className={`bg-[#16191D] rounded-xl p-4 flex flex-col justify-between gap-3 border transition-colors ${
                    includeBonus ? 'border-[#00FF88]/70' : 'border-[#262B33]'
                  }`}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-[#FFFFFF]">
                    <ProductImage
                      src="/assets/aistudio/image_eb27b270.png"
                      alt="Mini Massageador Elétrico Portátil AMT Bivolt aplicado nas costas e em detalhe"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="border-t border-[#262B33] pt-2.5 space-y-0.5">
                    <p className="font-display text-xs sm:text-sm font-bold text-[#F8FAFC]">
                      Mini Massageador AMT
                    </p>
                    <p className="text-xs font-bold text-[#00FF88] tabular-nums">
                      R$ 37,89
                    </p>
                    <p className="text-[11px] text-[#94A3B8]">Frete: Grátis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 9: PERGUNTAS FREQUENTES (FAQ) */}
        <section id="faq" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <p className="text-xs font-semibold text-[#94A3B8]">Tire suas Dúvidas</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="bg-[#16191D] border border-[#262B33] rounded-2xl divide-y divide-[#262B33] overflow-hidden">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                      className="w-full min-h-[56px] px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-[#1E2228] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#00FF88]"
                    >
                      <span className="font-display text-sm sm:text-base font-semibold text-[#F8FAFC]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#00FF88] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-0.5 text-sm text-[#94A3B8] leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BLOCO 10: FECHAMENTO — CHAMADA PARA COMPRA */}
        <section id="oferta-final" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <div className="bg-[#16191D] border border-[#262B33] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
              <p className="text-xs font-semibold tracking-wide text-[#00FF88]">
                Oferta Especial · RELAXPRO + Mini AMT Opcional
              </p>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight text-[#F8FAFC]">
                Seu descanso não precisa ficar para depois.
              </h2>

              <p className="text-[15px] sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">
                Você já passou o dia inteiro cuidando das suas obrigações. Agora é hora de reservar
                alguns minutos para cuidar de você. Garanta sua RelaxPro com frete grátis e
                adicione o Mini Massageador AMT por apenas R$ 37,89.
              </p>

              <div className="pt-2 space-y-1.5">
                <p className="text-xs text-[#94A3B8] tabular-nums">
                  De: <span className="line-through">{formatBRL(compareAmount)}</span>
                </p>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#00FF88] tabular-nums">
                  {formatBRL(totalAmount)} à vista ou parcelado.
                </p>
                <p className="text-xs font-semibold text-[#94A3B8]">
                  {includeBonus
                    ? 'Inclui Pistola RELAXPRO (R$ 98,67) + Mini Massageador AMT (R$ 37,89) · Frete Grátis'
                    : 'Pistola RELAXPRO (R$ 98,67) · Frete: Grátis para todo o Brasil'}
                </p>
              </div>

              <div className="pt-1 space-y-3">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-checkout-trigger="true"
                  className="w-full sm:w-auto min-h-[56px] px-7 py-4 rounded-xl bg-[#00FF88] hover:bg-[#26FF9A] active:scale-[0.99] text-[#0B0D0E] font-display text-sm sm:text-base font-bold tracking-wide shadow-[0_0_24px_rgba(0,255,136,0.3)] hover:shadow-[0_0_34px_rgba(0,255,136,0.5)] transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00FF88]"
                >
                  <ShoppingBag className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>GARANTIR OFERTA AGORA!</span>
                </a>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#94A3B8]">
                  <span className="inline-flex items-center gap-1.5 text-[#F8FAFC]">
                    <ShieldCheck className="w-4 h-4 text-[#00FF88]" aria-hidden="true" />
                    Compra Segura
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#00FF88] font-semibold">Frete Grátis</span>
                  <span aria-hidden="true">·</span>
                  <span>Bivolt 110/220V</span>
                  <span aria-hidden="true">·</span>
                  <span>Mini AMT por R$ 37,89</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 min-h-[260px] bg-[#0B0D0E]">
              <ProductImage
                src="/assets/aistudio/image_f3fffa68.png"
                alt="Pistola massageadora RELAXPRO em destaque com visor de 6 velocidades"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Barra Fixa Mobile para Alcance Rápido do CTA (<= 15% da viewport mobile) */}
      {showStickyMobileCta && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#16191D]/95 backdrop-blur-sm border-t border-[#262B33] px-4 py-2.5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] text-[#94A3B8] font-medium tabular-nums">
                <span className="line-through mr-1.5">{formatBRL(compareAmount)}</span>
                <span className="text-[#00FF88]">Frete Grátis</span>
              </p>
              <p className="font-display text-base font-extrabold text-[#00FF88] tabular-nums leading-tight">
                {formatBRL(totalAmount)}
              </p>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#00FF88] hover:bg-[#26FF9A] text-[#0B0D0E] font-display text-xs font-bold tracking-wide shadow-[0_0_18px_rgba(0,255,136,0.28)] transition-all flex items-center justify-center truncate cursor-pointer"
            >
              GARANTIR OFERTA
            </a>
          </div>
        </div>
      )}

      {/* BLOCO 11: RODAPÉ COMPACTO */}
      <footer className="bg-[#16191D] border-t border-[#262B33]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-[13px] text-[#94A3B8]">
            <div className="space-y-1.5">
              <p className="font-display text-base font-extrabold text-[#F8FAFC]">RELAXPRO</p>
              <p className="leading-relaxed">
                Atendimento ao cliente: Segunda a Sexta, das 09h às 18h · suporte@relaxpro.com.br
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-[#F8FAFC]">Envio, Trocas e Garantia</p>
              <p className="leading-relaxed">
                Despacho em até 2 dias úteis com código de rastreamento. Garantia e direito de
                devolução de 7 dias conforme o Código de Defesa do Consumidor.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-[#F8FAFC]">Políticas da Loja</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {FOOTER_POLICIES.map((policy) => (
                  <button
                    key={policy.id}
                    type="button"
                    onClick={() => setActivePolicy(policy)}
                    className="text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] underline underline-offset-4 cursor-pointer"
                  >
                    {policy.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-[#262B33] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#94A3B8]">
            <p>
              Aviso legal: produto destinado ao bem-estar e relaxamento muscular doméstico; não
              substitui acompanhamento médico ou fisioterapêutico.
            </p>
            <p className="shrink-0">
              © {new Date().getFullYear()} RELAXPRO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Políticas e Avisos do Rodapé */}
      {activePolicy && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0D0E]/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-dialog-title"
        >
          <div className="bg-[#16191D] w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl border border-[#262B33] p-5 sm:p-6 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-[#262B33] pb-3">
              <h3
                id="policy-dialog-title"
                className="font-display text-lg font-bold text-[#F8FAFC]"
              >
                {activePolicy.title}
              </h3>
              <button
                type="button"
                aria-label="Fechar política"
                onClick={() => setActivePolicy(null)}
                className="w-9 h-9 rounded-lg border border-[#262B33] bg-[#0B0D0E] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-[#94A3B8] leading-relaxed">
              {activePolicy.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#94A3B8] border-t border-[#262B33]">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00FF88]" aria-hidden="true" />
                suporte@relaxpro.com.br
              </span>
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="px-4 py-2 rounded-lg bg-[#00FF88] hover:bg-[#26FF9A] text-[#0B0D0E] font-bold cursor-pointer"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
