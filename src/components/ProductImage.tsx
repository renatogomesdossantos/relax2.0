import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ProductImage({
  src,
  alt,
  className = '',
  fallbackLabel
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#16191D] to-[#0B0D0E] text-[#94A3B8] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-7 h-7 text-[#64748B]" aria-hidden="true" />
        <span className="text-xs font-medium text-[#94A3B8]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
