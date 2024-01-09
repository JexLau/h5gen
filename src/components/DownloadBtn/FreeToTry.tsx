type FreeToTryProps = {
  className?: string
  text?: string
}

export const FreeToTry = ({ className, text,  }: FreeToTryProps) => {
  return <a 
  className={
    `relative py-3 px-8 text-white font-bold rounded-full transition duration-150 ease-in-out 
    bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.blue.700)_0%,theme(colors.blue.300)_10%,theme(colors.blue.700)_20%)] 
    animate-[shimmer_2.5s_linear_infinite] 
    after:flex after:absolute after:bg-blue-700 after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)]
    after:items-center after:justify-center ${className}`
  }
  aria-label={text || "Free To Try"}
  href={'/google-maps-scraper-chrome-extension'}
>
  {/* <span><svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"/><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"/><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"/><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"/></svg></span> */}
  <span className="opacity-0">{text || "Free To Try"}</span>
</a>
}


