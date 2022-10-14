import {
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  classnames,
  height,
  maxHeight,
  maxWidth,
  padding,
  position,
  space,
  transitionProperty,
  width,
  wordBreak,
  zIndex,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'
import GradientBorder from 'components/ui/GradientBorder'
import classNamesToString from 'helpers/classNamesToString'

interface CardProps {
  small?: boolean
  blueBg?: boolean
  gradient?: boolean
  hoverEffect?: boolean
  error?: boolean
}

const cardContainer = ({
  small,
  blueBg,
  gradient,
  hoverEffect,
  error,
}: CardProps) => {
  const card = classnames(
    position('relative'),
    borderWidth(blueBg ? 'border-0' : { border: !gradient }),
    borderColor(error ? 'border-error' : 'border-half-grey'),
    borderRadius('rounded-2xl'),
    backgroundColor(
      blueBg
        ? 'bg-primary-background'
        : {
            'bg-primary-dark': true,
            'hover:bg-primary-semi-dark': hoverEffect,
          }
    ),
    padding(small ? 'p-4' : 'p-6'),
    maxWidth('max-w-full'),
    maxHeight('max-h-full'),
    height('h-fit'),
    width('w-full'),
    space('space-y-4'),
    wordBreak('break-words'),
    zIndex('z-20'),
    transitionProperty('transition-colors')
  )
  // added via css because tailwind class overwrites by material-ui
  return classNamesToString(card, 'shadow-card')
}

export default function ({
  children,
  small,
  blueBg,
  gradient,
  hoverEffect,
  error,
}: ChildrenProp & {
  small?: boolean
  blueBg?: boolean
  gradient?: boolean
  hoverEffect?: boolean
  error?: boolean
}) {
  const content = (
    <div
      className={cardContainer({ small, blueBg, gradient, hoverEffect, error })}
    >
      {children}
    </div>
  )

  return gradient ? (
    <GradientBorder smallRadius withoutShadow>
      {content}
    </GradientBorder>
  ) : (
    content
  )
}
