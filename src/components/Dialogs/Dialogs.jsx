import style from './Dialogs.module.css';
import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'





function Dialogs(props) {

  
    
    // let dialogData = [
    //     {id: 1, name: 'Dima' },
    //     {id: 2, name: 'Lena' },
    //     {id: 3, name: 'Dasha' },
    //     {id: 4, name: 'Vera' }
        
    // ]
    // let messagesData = [
    //     {id: 1, message: 'hi' },
    //     {id: 2, message: 'how are you ?' },
    //     {id: 3, message: 'Great' },
        
        
    // ]

    let dialogArray = props.state.dialogData.map( dialog => {
        return <DialogItem id={dialog.id} name={dialog.name}/>
    })

    let messageArray = props.state.messagesData.map(message => <Messages message={message.message}/> )

    let textArea = React.createRef();
    let aler = () => {
        let text = textArea.current.value
        alert(text)
    }




    return (
        
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogArray}

                {/* <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>
                <DialogItem id={dialogData[3].id} name={dialogData[3].name}/> */}

                {/* <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/1'>Dima</NavLink>
                </div> */}
                
            </div>
            <div className={style.messages}>
                {messageArray}
                {/* <Messages message={messagesData[0].message}/>
                <Messages message={messagesData[1].message}/>
                <Messages message={messagesData[2].message}/> */}
                 <textarea ref={textArea} className={style.textArea}  cols="20" rows="3"></textarea>
                 <div>
                 <button onClick={aler}>send message</button>
                 </div>
            </div>
           
        </div>
    )
}

export default Dialogs;
