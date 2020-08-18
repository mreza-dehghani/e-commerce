import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

function Dashbord(props) {
    const [username, setUsername] = useState('')

    useEffect(() => {
        setUsername(props.user.username)
    }, [])

    return (
        <div>
            <div className="container pt-5 text-center">
                <div className="row pt-5">
                    <div className="col-12 p-3">
                        <h1> {username}، به صفحه مدیریت خود خوش آمدید. </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Dashbord)
