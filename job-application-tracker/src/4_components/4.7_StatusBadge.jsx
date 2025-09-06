import React from 'react'

const statusMap = {
  applied: {
    emoji: '🟦',
    color: 'text-cyan-400',
    glow: 'shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]', // cyan glow
  },
  interviewing: {
    emoji: '🔴',
    color: 'text-red-400',
    glow: 'shadow-[0_0_10px_2px_rgba(248,113,113,0.7)]', // red glow
  },
  offer: {
    emoji: '💖',
    color: 'text-pink-400',
    glow: 'shadow-[0_0_10px_2px_rgba(244,114,182,0.7)]', // pink glow
  },
  rejected: {
    emoji: '🟠',
    color: 'text-orange-400',
    glow: 'shadow-[0_0_10px_2px_rgba(251,146,60,0.7)]', // orange glow
  },
}

export default function StatusBadge({ status }) {
  const lowerStatus = status.toLowerCase()
  const { emoji, color, glow } = statusMap[lowerStatus] || {
    emoji: '❓',
    color: 'text-gray-300',
    glow: 'shadow-[0_0_8px_2px_rgba(156,163,175,0.5)]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white font-mono text-xs font-semibold bg-black ${color} ${glow}`}
    >
      {emoji} {status}
    </span>
  )
}
