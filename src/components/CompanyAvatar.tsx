import React, { useState } from 'react';

interface CompanyAvatarProps {
  name: string;
  img?: string;
  size?: number;
}

const CompanyAvatar = ({ name, img, size = 48 }: CompanyAvatarProps) => {
  const [imgError, setImgError] = useState(false);

  // Generate a deterministic color from company name
  const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  if (img && !imgError) {
    return (
      <img
        src={img}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setImgError(true)}
        className="rounded-lg object-contain bg-white p-1 flex-shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }

  // Fallback: colored initials avatar
  return (
    <div
      className="rounded-lg flex items-center justify-center text-white font-bold font-mono flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: bgColor,
        fontSize: size * 0.35,
      }}
    >
      {initials}
    </div>
  );
};

export default CompanyAvatar;
