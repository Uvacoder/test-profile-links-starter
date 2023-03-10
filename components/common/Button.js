import clsx from 'clsx'
import React from 'react'

export default function Button({
  variant = 'primary',
  loading = false,
  loadingText = 'loading...',
  className,
  children,
  ...attributes
}) {
  const variantClassname = clsx({
    ['bg-orange-600 text-white disabled:bg-orange-400 disabled:ring-0']:
      variant === 'primary',
    ['text-orange-600 disabled:text-orange-400 bg-white bg-opacity-10 backdrop-blur-sm']:
      variant === 'text',
  })

  return (
    <button
      {...attributes}
      className={clsx(
        'inline-block cursor-pointer rounded-md px-6 py-2 text-sm font-semibold leading-snug ring-orange-300 transition duration-150 ease-in-out hover:ring focus:ring',
        variantClassname,
        className
      )}
      disabled={attributes.disabled || loading}
      onClick={attributes.onClick}
    >
      <span className="mr-xsmall last:mr-0">
        {loading ? loadingText : children}
      </span>
    </button>
  )
}
