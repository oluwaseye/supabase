import React from 'react'
import Link from 'next/link'
import { IconAlertCircle, IconArrowRight, IconChevronRight, TextLink } from 'ui'
import { ListItem } from '.'

import { data as DevelopersData } from 'data/Developers'
import ProductIcon from '../ProductIcon'
import { ChevronRightIcon } from '@heroicons/react/outline'

type Props = {
  text: string
  description?: string
  url?: string
  icon?: string
  svg?: any
}

const Developers = () => (
  <>
    <ul className="border-b p-2">
      {DevelopersData['header'].map((link) => (
        <ListItem key={link.text} href={link.url} className="py-4 items-center group">
          {link.icon && <ProductIcon icon={link.icon} color="gray" />}
          <div className="flex flex-col space-y-1 flex-1">
            <div className="leading-none">{link.text}</div>
            {link.description && (
              <p className="line-clamp-2 text-sm leading-snug text-light">{link.description}</p>
            )}
          </div>
          <div className="shrink-0 flex items-center">
            <IconChevronRight className="-translate-x-1 transition-transform group-hover:translate-x-0" />
          </div>
        </ListItem>
      ))}
    </ul>
    <ul className="grid gap-3 p-2 md:grid-cols-3 w-[650px] border-b">
      {DevelopersData['navigation'].map((column) => (
        <li key={column.label} className="p-2">
          <label className="text-muted text-xs uppercase tracking-widest font-mono">
            {column.label}
          </label>
          {column.links.map((link: Props) => (
            <TextLink
              hasChevron={false}
              key={link.text}
              url={link.url}
              label={link.text}
              className="focus-visible:ring-offset-4 focus-visible:ring-offset-background-overlay"
            />
          ))}
        </li>
      ))}
    </ul>
    <ul className="p-2 flex justify-between bg-alternative text-sm">
      <Link href={DevelopersData['footer']['support'].url}>
        <a className="p-2 hover:bg-[#101010] rounded text-foreground-light flex items-center gap-1 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:text-foreground-strong">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6 7.00039C12.6 10.0932 10.0928 12.6004 7.00002 12.6004C3.90723 12.6004 1.40002 10.0932 1.40002 7.00039C1.40002 3.9076 3.90723 1.40039 7.00002 1.40039C10.0928 1.40039 12.6 3.9076 12.6 7.00039ZM7.70003 9.80039C7.70003 10.187 7.38662 10.5004 7.00002 10.5004C6.61343 10.5004 6.30002 10.187 6.30002 9.80039C6.30002 9.41379 6.61343 9.10039 7.00002 9.10039C7.38662 9.10039 7.70003 9.41379 7.70003 9.80039ZM7.00002 3.50039C6.61343 3.50039 6.30002 3.81379 6.30002 4.20039V7.00039C6.30002 7.38699 6.61343 7.70039 7.00002 7.70039C7.38662 7.70039 7.70002 7.38699 7.70002 7.00039V4.20039C7.70002 3.81379 7.38662 3.50039 7.00002 3.50039Z"
              fill="#707070"
            />
          </svg>

          <span>{DevelopersData['footer']['support'].text}</span>
        </a>
      </Link>
      <Link href={DevelopersData['footer']['systemStatus'].url}>
        <a className="p-2 hover:bg-[#101010] rounded text-foreground-light focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:text-foreground-strong">
          {DevelopersData['footer']['systemStatus'].text}
        </a>
      </Link>
    </ul>
  </>
)

export default Developers
