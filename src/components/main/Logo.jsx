function Logo({ className = 'h-10 w-10' }) {
  return (
    <img
      src="/gardensideLogo.png"
      alt="Gardenside Kitchen logo"
      className={className}
      loading="eager"
    />
  )
}

export default Logo
