function Logo({ className = 'h-10 w-10' }) {
  return (
    <img
      src="/logo/gardensideLogo.webp"
      alt="Gardenside Kitchen logo"
      width={160}
      height={160}
      className={className}
      loading="eager"
    />
  )
}

export default Logo
