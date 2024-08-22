import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { IListItemLinkProps } from "../../types/components"

export const ListItemLink = ({icon, label, onClick, to}: IListItemLinkProps) => {

  const navigate = useNavigate()

  const handleClick = () => {
    onClick()
    navigate(to)
  }

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}