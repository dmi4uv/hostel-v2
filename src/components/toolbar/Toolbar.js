import React,{Fragment, Component} from 'react'
import './Toolbar.scss'

class Toolbar extends Component {

    constructor() {
        super();
        this.state = {
            toolBarClass: 'toolbar toolbar_full',
            fakeToolbar: 'fake_toolbar'
        }
    }

    roomsClick() {
        this.setState({fakeToolbar: 'fake_toolbar fake_toolbar_full'})

        setTimeout(()=> {
            this.setState({fakeToolbar: 'fake_toolbar fake_toolbar_close'})
             setTimeout(()=>{
                 this.setState({fakeToolbar: 'fake_toolbar'})
             },1000)
        },1000)



    }



    componentDidMount() {
       setTimeout(()=> {
           this.setState({toolBarClass: 'toolbar'})
           console.log(2)
       },100)
    }

    render() {


        // const timeout = setTimeout(()=>{
        //     this.setState({toolBarClass: "toolbar"})
        //     console.log('2')
        //     clearTimeout(timeout)
        // }, 100)


        return <Fragment>
            <div className={this.state.toolBarClass}>
                <div className="nav">
                    <div id="link0" className="link"/>
                    <div id="link1" className="link">Главная</div>
                    <div id="link2" onClick={this.roomsClick.bind(this)} className="link">Номера</div>
                    <div id="link3" className="link">О нас</div>
                    <div id="link4" className="link"/>
                </div>
                <div className="nav_sub">
                    <div className="link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2ZM4 3.99999V20H20V3.99999H4ZM11.1331 12.0044H13V18H15V12.0044H16.9824V10.0044H15V9C15 8.44771 15.4477 8 16 8H17V6H16C14.3431 6 13 7.34314 13 9V10.0044H11.1331V12.0044Z"
                                  fill="white"/>
                        </svg>

                    </div>
                    <div className="link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14 0H6C2.68629 0 0 2.68629 0 6V14C0 17.3137 2.68629 20 6 20H14C17.3137 20 20 17.3137 20 14V6C20 2.68629 17.3137 0 14 0ZM2 6C2 3.79086 3.79086 2 6 2H14C16.2091 2 18 3.79086 18 6V14C18 16.2091 16.2091 18 14 18H6C3.79086 18 2 16.2091 2 14V6ZM10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13ZM16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z"
                                  fill="white"/>
                        </svg>

                    </div>
                    <div className="link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="24 / symbols / twitter">
                                <path id="icon" fillRule="evenodd" clipRule="evenodd"
                                      d="M21.1195 5.73533L22.5343 5.94553L21.8983 7.56693C21.5882 8.35762 21.2778 9.14832 20.967 9.93901C20.9302 10.1065 20.8654 10.2533 20.7697 10.4444C20.7296 10.5243 20.5929 10.7784 20.5865 10.7906C20.5504 10.8594 20.5237 10.9138 20.5045 10.9573V13.9959C20.5045 21.7715 14.5895 26.7125 9.00354 26.7125C7.86051 26.7125 6.99207 26.6428 5.99765 26.3668C4.36115 25.9125 3.14327 25.0094 2.58597 23.431L2.01221 21.806L3.40659 21.6429C4.66801 21.4953 5.76169 21.1896 6.60159 20.7802C4.29577 20.3085 3.0036 19.0201 3.0036 16.6005V15.3284H4.0036C4.22331 15.3284 4.42143 15.3057 4.59854 15.2641C2.868 13.9477 2.00122 11.8361 2.00122 8.9072C2.00103 8.78236 2.00103 8.78236 2.00044 8.64888C1.99394 7.17258 2.05627 6.38376 2.37395 5.37699C2.57754 4.73176 2.87183 4.13444 3.2679 3.58712L4.02251 2.54436L4.75617 3.61104C7.17394 7.12625 9.56395 9.25887 12.0042 9.51683C12.0146 6.27318 13.9415 3.81848 16.5043 3.81848C17.6991 3.81848 18.7828 4.3954 19.6345 5.43568C20.1006 5.55753 20.5957 5.6575 21.1195 5.73533ZM18.9086 7.8392L18.6021 7.75088L18.3904 7.45533C17.8785 6.74071 17.2359 6.36284 16.5043 6.36284C15.0414 6.36284 14.0041 7.68894 14.0041 9.54329C14.0041 9.84634 13.998 10.0368 13.9683 10.287C13.8499 11.2857 13.4096 12.0877 12.5041 12.0877C9.50607 12.0877 6.80136 10.0444 4.16389 6.55463C4.02792 7.08046 3.99595 7.62096 4.00041 8.63463C4.00101 8.7702 4.00101 8.7702 4.00122 8.9072C4.00122 11.5126 4.83093 12.9378 6.79547 13.7322L7.49255 14.014V14.9446C7.49255 16.073 6.65222 17.1352 5.42268 17.611C5.98631 18.155 7.139 18.4486 9.00389 18.4486H10.0039V19.7207C10.0039 21.5434 8.35762 22.9706 5.87075 23.7158C6.68178 24.0319 7.76166 24.1682 9.00354 24.1682C13.618 24.1682 18.5045 20.0862 18.5045 13.9959V10.8155C18.5045 10.4417 18.5897 10.1173 18.7311 9.78001C18.7865 9.64812 18.8474 9.52239 18.9225 9.37899C18.9367 9.35199 18.9892 9.25417 19.0309 9.17597L19.1101 8.97433C19.2386 8.64758 19.3669 8.32083 19.4952 7.99409C19.2958 7.94603 19.1003 7.8944 18.9086 7.8392Z"
                                      fill="white"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={this.state.fakeToolbar}>

            </div>
        </Fragment>



    }


}

export default Toolbar