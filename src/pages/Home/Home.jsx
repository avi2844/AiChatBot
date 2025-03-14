import { useState, useRef, useEffect } from "react";
import MessageBox from "../../components/MessageBox/MessageBox";
import SideNav from "../../components/SideNav/SideNav";
import styles from "./Home.module.css";
import data from "../../aiData/sampleData.json"

function Home(){
    const [isBot, setisBot] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const inputRef = useRef();

    function getAiResponse(msg){
        let res = data.find(item => item.question === msg);
        return res ? res.response : 'Sorry, Did not understand your query!';
    }

    useEffect(()=> {
        if(!isBot)
            return
        const lastUserMessage = messageList[messageList.length - 1]?.message || '';
        let ans = getAiResponse(lastUserMessage);
        const data = {
            isBot : isBot,
            message : ans
        }
        setMessageList((prevValue) => [
            ...prevValue,
            data,
        ])
        setisBot((prev) => !prev);
        inputRef.current.value = ''
    }, [isBot])

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            isBot : isBot,
            message : inputRef.current.value.trim()
        }
        setMessageList((prevValue) => [
            ...prevValue,
            data,
        ])
        setisBot((prev) => !prev);
        inputRef.current.value = ''
    }

    function handleSave(e){
        e.preventDefault();
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        if (messageList.length === 0) return;
        const updatedMessages = [...savedMessages, messageList];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        setMessageList([]);
    }
    
    return(
        <div className={styles.main}>
        <SideNav />
        <div className={styles.home}>
            <div className={styles.messageArea}>
                {
                    messageList.map((ele, idx) => (
                        <MessageBox isBot={ele.isBot} message={ele.message} key={idx}/>
                    ))
                }
            </div>
            <form className={styles.footer}>
                <input type="text" placeholder="Message Bot AI…" ref={inputRef}/>
                <button type="submit" onClick={handleSubmit}>Ask</button>
                <button type="submit" onClick={handleSave}>Save</button>
            </form>
        </div>
        </div>  
    )
}

export default Home;