import React from 'react'
import {connect} from 'react-redux'

class Loading extends React.Component {
    render() {
        if(this.props.loading === true && this.props.error === false) {
            return(
                <div className="spinner spinner-border text-primary"></div>
            )
        } else if (this.props.loading === false && this.props.error === true) {
            return (
                <p>مشکل در ارتباط با سرور...</p>
            )
        }

        return (
            <>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, null)(Loading)
