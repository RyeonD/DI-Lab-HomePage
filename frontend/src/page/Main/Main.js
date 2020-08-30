import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import mainImage from './mainImage2.jpg'
import aiImage from './ai.png'
import sequenceImage from './sequence.png'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import SwipeableViews from 'react-swipeable-views';
import togetherImage from'./together3.png';

const useStyles = makeStyles((theme) => ({
    wrapper:{
        '@media screen and (max-width: 600px)': {
            root:{width:'100%'}
        },
    },
    mainImage:{
        width: '100%',
        verticalAlign: 'top',
        height: '500px'
    },
    
    description:{
        color: 'whitesmoke',
        position:'relative',
        backgroundColor: 'rgb(0,0,0)', /* Fallback color */
        backgroundColor: 'rgba(0,0,0, 0.4)', /* Black w/opacity/see-through */
        fontWeight: 'bold',
        border: '3px solid #f1f1f1',
        zIndex: 2,
        width: 'fit-content',
        padding: '20px',
        textAlign: 'center',
        margin:'0 auto 0 auto',
        bottom: '200px'
    },
    buttonWrapper:{
        position:'absolute',
        zIndex:2,
        width:'100%',
        top:'250px'
    },
    together:{
        color: 'whitesmoke',
        position:'relative',
        fontWeight: 'bold',
        zIndex: 2,
        width: 'fit-content',
        padding: '20px',
        textAlign: 'center',
        margin:'0 auto 0 auto',
    }
}))
const DescriptionBlock = ({image, description}) => {
    const classes = useStyles();
    return(
        <div>
            <img className = {classes.mainImage} src = {image}></img>
            { description ? <div className = {classes.description}>{description}</div>:'' }
        </div>
    );
}
const Main = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        if(newValue >= 0)
            setValue(newValue % viewList.length);
        else
            setValue(viewList.length - 1);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const viewList = [
        {'image': mainImage,'description': <div>DI LAB<br/>
        Data Inteligence Laboratory</div>},
        {'image': aiImage, 'description': <div>기계학습부터 인공지능까지의 알고리즘을 수학하고 데이터에 적용합니다.<br/>
        이 과정에서 프로젝트나 다양한 기관과의 협업에서 실제 발생하는 데이터를 다룰 기회가 주어지며,<br/>
        현업의 문제 해결을 위한 인공지능 방법론을 연구합니다.</div>},
        {'image': sequenceImage, 'description': <div>시계열 데이터, 시퀀스로 구성된 데이터에서 feature를 추출하기 위해 <br/>
        새로운 Representation 생성을 위한 임베딩 기반의 인공지능 방법론을 연구합니다. <br/>
        단순 수치형 시계열 데이터부터 복잡한 시퀀스 데이터까지 다룹니다.
        </div>}
    ]
    return (
        <div className = {classes.wrapper}>
                {/* <img className = {classes.mainImage} src = {mainImage}></img>
                <DescriptionBlock image = {aiImage} description = {() => (<div>기계학습부터 인공지능까지의 알고리즘을 수학하고 데이터에 적용합니다.<br/>
                        이 과정에서 프로젝트나 다양한 기관과의 협업에서 실제 발생하는 데이터를 다룰 기회가 주어지며,<br/>
                        현업의 문제 해결을 위한 인공지능 방법론을 연구합니다.</div>)}></DescriptionBlock> */}
                <div className = {classes.buttonWrapper}>
                    <IconButton style={{'color': '#fff',
                                        'marginLeft': '5px',
                                        'backgroundColor': '#0000008a'}}
                                size="medium"  onClick={(e) => handleChange(e, value-1)}>
                        <NavigateBeforeIcon  fontSize = "large"/>
                    </IconButton>
                    <IconButton style={{'float': 'right',
                                        'color': '#fff',
                                        'marginRight': '5px',
                                        'backgroundColor': '#0000008a'}} size="medium"  
                                onClick={(e) => handleChange(e, value+1)}>
                        <NavigateNextIcon fontSize = "large" />
                    </IconButton>
                </div>
                
                <SwipeableViews 
                    index={value}
                    onChangeIndex={handleChangeIndex}            
                >
                    {viewList.map((item, i) => {
                        return <DescriptionBlock image = {item.image} key={i} index={i} description = {item.description}/>
                    })}
                </SwipeableViews>
                <div>
                    <div className = {classes.together}>
                <h1>함께할 연구원을 모집합니다.</h1>
                <br/>
데이터지능 연구실에서는 데이터 분석/ 인공지능 분야에 대한 최신 기술을 함께 연구할 연구원을 모집합니다.<br/>
또한 연구원은 진행중인 프로젝트에 참여하게되어 최신 관련 분야의 이슈에 대해서 다루게 됩니다.<br/>
                    </div>
                <img style = {{'width': '100%',
                                'minHeight': '300px',
                                'margin':'-255px 0 -5px 0',
                                'maxHeight': '400px'}} src= {togetherImage}/>
                </div>
        </div>
    )
}
export default Main