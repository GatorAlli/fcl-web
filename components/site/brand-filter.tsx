export function BrandFilter() {
  return (
    <>
      <svg
        className="brand-color-filters"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id="logo-dark-contrast"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 -0.2126 -0.7152 -0.0722 0 1"
              result="inverse-luminance"
            />
            <feComponentTransfer
              in="inverse-luminance"
              result="white-lettering"
            >
              <feFuncA
                type="discrete"
                tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1"
              />
            </feComponentTransfer>
            <feComposite
              in="white-lettering"
              in2="SourceGraphic"
              operator="in"
              result="clipped-lettering"
            />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="clipped-lettering" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </>
  );
}
