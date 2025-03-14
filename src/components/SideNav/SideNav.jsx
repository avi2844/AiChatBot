import { Box, Container, Typography } from "@mui/material";
import newChatIcon from "../../assets/newchat.png"
import editIcon from "../../assets/edit.png"
import styles from "./SideNav.module.css"

function SideNav(){
    return(
        <div className={styles.sidenav}>
            <header>
                <img className={styles.newChatImg} src={newChatIcon} />
                <Typography>New Chat</Typography>
                <img style={{ width : '24px', height: '24px'}} src={editIcon} />
            </header>
            <div className={styles.pastConvo}>
                <Typography fontWeight={700} fontSize={18}>Past Conversations</Typography>
            </div>
        </div>
    )
}

export default SideNav;