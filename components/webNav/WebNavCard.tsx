/* eslint-disable react/jsx-no-target-blank */

import Link from 'next/link';
import { WebNavigation } from '@/db/supabase/types';
import { CircleArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WebNavCard({ name, thumbnail_url, title, url, content }: WebNavigation) {
  const t = useTranslations('Home');

  return (
    <div className='group flex h-[210px] flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 lg:h-[343px]'>
      <Link href={`/ai/${name}`} title={title} className='relative overflow-hidden'>
        <img
          src={thumbnail_url || ''}
          alt={title}
          title={title}
          width={310}
          height={174}
          className='aspect-[310/174] w-full rounded-md bg-gray-100 object-cover transition-transform duration-200 group-hover:scale-105 dark:bg-gray-700'
        />
        <div className='absolute inset-0 z-10 hidden items-center justify-center gap-2 rounded-md bg-black/60 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 group-hover:flex'>
          {t('checkDetail')} <CircleArrowRight className='size-4' />
        </div>
      </Link>
      <div className='flex items-center justify-between'>
        <a
          href={url}
          title={title}
          target='_blank'
          rel='nofollow'
          className='group-hover:text-blue-500 dark:group-hover:text-blue-400'
        >
          <h3 className='font-raleway line-clamp-1 flex-1 text-sm font-semibold text-gray-900 dark:text-white lg:text-base'>
            {title}
          </h3>
        </a>
        <a
          href={url}
          title={title}
          target='_blank'
          rel='nofollow'
          className='text-gray-500 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400'
        >
          <SquareArrowOutUpRight className='size-5' />
          <span className='sr-only'>{title}</span>
        </a>
      </div>
      <p className='font-open-sans line-clamp-3 text-xs text-gray-600 dark:text-gray-300 lg:line-clamp-5 lg:text-sm'>
        {content}
      </p>
    </div>
  );
}
