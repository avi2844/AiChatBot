import { useState, useRef, useEffect } from "react";
import MessageBox from "../../components/MessageBox/MessageBox";
import SideNav from "../../components/SideNav/SideNav";
import styles from "./History.module.css";


function History(){
    const [savedMessages, setSavedMessages] = useState([]);

    function getSavedMessages(){
        const data = JSON.parse(localStorage.getItem("chatMessages")) || [];
        if (Array.isArray(data)) {
            setSavedMessages(data);
        } 
    }

    useEffect(()=> {
        getSavedMessages();
    }, [])

    return(
        <div className={styles.main}>
        <SideNav />
        <div className={styles.home}>
            <h1>Conversation History</h1>
            <div>
                <h2>Today's Chats</h2>
            <div className={styles.messageArea}>
                {
                    (savedMessages.length > 1) ?
                    savedMessages.map((ele, idx) => {
                        console.log(ele);
                        let lastMessages = ele.slice(-2);
                        return <MessageBox key={idx} history={true} messages={lastMessages}/>
                    }
                    ) : null
                }
            </div>
            </div>
            
        </div>
        </div>  
    )
}

export default History;