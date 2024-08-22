export type IHeaderProps = {
    icon: string
    text: string
    newUser?: React.ReactNode
}


export type IListItemLinkProps = {
    to: string
    icon: string
    label: string
    onClick: () => void
  }