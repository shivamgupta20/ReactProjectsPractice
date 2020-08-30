import React from 'react';
// import './application.peoperties'
import testdata from './test.json'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: true }
    }
    render() {
        console.log(testdata)
        return (
            <div>

                {<>
                    <img src={testdata.moviesList[1].image} />
                    <label > {testdata.moviesList[1].title} </label>
                    <label > {testdata.moviesList[1].Description} </label>
                </>
                }



                <p contentEditable="true" title="This tooltip comes up with title attribute.">
                    Blocking your <q>calendar</q> <small>to go</small> through the <mark>UBS Compliance</mark> Induction Classroom <strong> Training. </strong> Please make <em>every effort</em> to join <sub>this training</sub> as its<sup> mandated by</sup> UBS
                </p>
                <p>
                    &nbsp; &lt; &gt; &amp; &copy; &euro; &pound; &reg;
                </p>
                <p>
                    input element types = text,password,checkbox,radio,button,submit,reset,image,file,hidden,email,number,range,search,URL,color,date,month,week,time. <br />
                    input element attributes = Placeholder,Pattern,Min,Max,Step,Required,Multiple,Form-override
                </p>




            </div>
        )
    }

}
export default Home;