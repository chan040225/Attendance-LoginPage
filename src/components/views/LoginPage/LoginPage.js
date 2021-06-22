import '../../../LoginPage.css';
import imgsrc from '../../../TeamTitle.png';
import gifsrc from '../../../a2.gif';
import React, { useEffect } from 'react'
import axios from 'axios'

function LoginPage() {

    const url = "222.110.147.50:8000";
    useEffect(() => {
        axios.get(`${url}/getStudent`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <html>
        <body>
            <div class="box">
                <div class="wave -one">

                </div>
                <div class="wave -two">

                </div>
                <div class="wave -three">
                    
                </div>
                <form action="" name="form" method="post">
                    <div class="login_box">
                        <div class="logo">
                            <img src={gifsrc}/>
                        </div>
                        <div class="email_input">
                            <input type="email" name="email" placeholder="이메일" autocomplete='off'/>
                        </div>
                        <div class="pw_input">
                            <input type="password" name="pw" placeholder="비밀번호" autocomplete='off'/>
                        </div>
                        <div class="attendance_btn">
                            <input type="submit" value="출석"/>
                        </div>
                        <div class="footer">
                            <img src={imgsrc}/>
                        </div>
                    </div>
                </form>
            </div>
        </body>
        </html>
    )
}

export default LoginPage
