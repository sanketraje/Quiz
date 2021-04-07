import React  from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

function OnlineExam(props)
{
    const {reg, handleSubmit}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

    return(
        <div className="App">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>HTML Quiz</h1>
                <h3>Let's start quiz  {""+props.dis.name}</h3>
                <label>1. What does HTML stands for ?</label><br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>Hypertext Machine language.<br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>Hypertext and links markup language.<br/>
                <input type="radio" name="one" value="0" onChange={props.check} ref={reg}/>Hypertext Markup Language.<br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>Hightext machine language. <br/><br/>

                <label>2. The correct sequence of HTML tags for starting a webpage is -</label><br/>
                <input type="radio" name="two" value="1" onChange={props.check} ref={reg}/>Head, Title, HTML, body<br/>
                <input type="radio" name="two" value="1" onChange={props.check} ref={reg}/>HTML, Body, Title, Head<br/>
                <input type="radio" name="two" value="0" onChange={props.check} ref={reg}/>HTML, Head, Title, Body<br/>
                <input type="radio" name="two" value="1" onChange={props.check} ref={reg}/>HTML, Head, Body, Title<br/><br/>

                <label>3. Which character is used to represent the closing of a tag in HTML?</label><br/>
                <input type="radio" name="three" value="1" onChange={props.check} ref={reg}/>\<br/>
                <input type="radio" name="three" value="1" onChange={props.check} ref={reg}/>!<br/>
                <input type="radio" name="three" value="0" onChange={props.check} ref={reg}/>/<br/>
                <input type="radio" name="three" value="1" onChange={props.check} ref={reg}/>.<br/><br/>

                <label>4. Which of the following attribute is used to provide a unique name to an element?</label><br/>
                <input type="radio" name="four" value="1" onChange={props.check} ref={reg}/>class<br/>
                <input type="radio" name="four" value="0" onChange={props.check} ref={reg}/>id<br/>
                <input type="radio" name="four" value="1" onChange={props.check} ref={reg}/>type<br/>
                <input type="radio" name="four" value="1" onChange={props.check} ref={reg}/>None of the above<br/><br/>

                <label>5. What are the types of unordered or bulleted list in HTML?</label><br/>
                <input type="radio" name="five" value="1" onChange={props.check} ref={reg}/>disc, square, triangle<br/>
                <input type="radio" name="five" value="1" onChange={props.check} ref={reg}/>polygon, triangle, circle<br/>
                <input type="radio" name="five" value="0" onChange={props.check} ref={reg}/>disc, circle, square<br/>
                <input type="radio" name="one" value="1" onChange={props.check} ref={reg}/>All of the above<br/><br/>

                <label>6. Which of the following HTML attribute is used to define inline styles?</label><br/>
                <input type="radio" name="six" value="0" onChange={props.check} ref={reg}/>style<br/>
                <input type="radio" name="six" value="1" onChange={props.check} ref={reg}/>type<br/>
                <input type="radio" name="six" value="1" onChange={props.check} ref={reg}/>class<br/>
                <input type="radio" name="six" value="1" onChange={props.check} ref={reg}/>None of the above<br/><br/>

                <label>7. A program in HTML can be rendered and read by -</label><br/>
                <input type="radio" name="seven" value="0" onChange={props.check} ref={reg}/>Web browser<br/>
                <input type="radio" name="seven" value="1" onChange={props.check} ref={reg}/>Server<br/>
                <input type="radio" name="seven" value="1" onChange={props.check} ref={reg}/>Interpreter<br/>
                <input type="radio" name="seven" value="1" onChange={props.check} ref={reg}/>None of the above<br/><br/>

                <label>8. The tags in HTML are -</label><br/>
                <input type="radio" name="eight" value="1" onChange={props.check} ref={reg}/>case-sensitive<br/>
                <input type="radio" name="eight" value="1" onChange={props.check} ref={reg}/>in upper case<br/>
                <input type="radio" name="eight" value="0" onChange={props.check} ref={reg}/>not case sensitive<br/>
                <input type="radio" name="eight" value="1" onChange={props.check} ref={reg}/>in lowercase<br/><br/>

                <label>9. Which of the following are the attributes of the tag?</label><br/>
                <input type="radio" name="nine" value="1" onChange={props.check} ref={reg}/>method<br/>
                <input type="radio" name="nine" value="1" onChange={props.check} ref={reg}/>action<br/>
                <input type="radio" name="nine" value="0" onChange={props.check} ref={reg}/>Both (a) and (b)<br/>
                <input type="radio" name="nine" value="1" onChange={props.check} ref={reg}/>None of the above<br/><br/>

                <label>10. How many attributes are there in HTML5?</label><br/>
                <input type="radio" name="ten" value="0" onChange={props.check} ref={reg}/>2<br/>
                <input type="radio" name="ten" value="1" onChange={props.check} ref={reg}/>4<br/>
                <input type="radio" name="ten" value="1" onChange={props.check} ref={reg}/>1<br/>
                <input type="radio" name="ten" value="1" onChange={props.check} ref={reg}/>5<br/><br/>


                <button type="submit"><Link to="/Result">SUBMIT</Link> </button>
                
            </form>
        </div>
    )
}

export default OnlineExam;