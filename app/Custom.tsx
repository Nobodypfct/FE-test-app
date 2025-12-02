'use client'
import { Button } from '@radix-ui/themes'

export const Custom = () => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('clicked', e)
  }
  return <Button onClick={(e) => onClickHandler(e)}>{`Let's go`}</Button>
}
