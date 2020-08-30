import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import profile from './hjkim.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    containers: {
        margin: '0 10%',
        fontSize: '15px'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    
    table: {
        maxWidth: 800
    },
    profileImage: {
        margin: '50px 120px 25px 0'
    }
}))
const Professor = () => {
    const classes = useStyles();
    return (
        <section className={classes.containers}>

            <div class="container">
                <div className={classes.info}>
                    <img className={classes.profileImage} src={profile} width='190' height='270'></img>
                <div className={classes.profile}>
                <header class="major">
                    <h2>Profile</h2>
                    <h3>Professor</h3>
                </header>
                <p>Dept. of Computer and Communications Engineering<br></br>
                College of Information Technology<br></br>
                Kangwon National University, Chuncheon, Republic of Korea<br></br>
                (강원대학교 IT 대학 컴퓨터학부 교수 김화종)<br></br>
                </p>
                <p>
                    강원도 춘천시 강원대학길 1 공대6호관 403호(24341)<br></br>
                    403, Dept. of Computer and Communications Engineering, 1, Gangwondaehak-gil, <br></br>
                    Chuncheon-si, Gangwon-do, Republic of Korea, 24341<br></br>
                </p>
                <p>
                    Fax: 033-259-5677<br></br>
                    Phone: 033-250-6323<br></br>
                    e-mail: hjkim3@gmail.com<br></br>
                </p>
            </div>
            </div>
            </div>

            <div><br></br></div>

            <div>
                <Table className={classes.table} aria-label="simple table">
                    <h2>Education</h2>
                    <TableBody>
                        <TableRow><TableCell>1978 3. 1 ~ 1982. 2. 28   	</TableCell><TableCell>서울대학교 전자공학과 (학사)</TableCell></TableRow>
                        <TableRow><TableCell>1982 3. 1 ~ 1984. 2. 28   	</TableCell><TableCell>KAIST 전기및전자과 (석사, 통신 전공)</TableCell></TableRow>
                        <TableRow><TableCell>1984 3. 1 ~ 1988. 8. 18   	</TableCell><TableCell>KAIST 전기및전자과 (박사, 데이터통신 전공)</TableCell></TableRow>

                    </TableBody>
                </Table>
            </div>

            <div><br></br></div>

            <div>
                <Table className={classes.table} aria-label="simple table">
                    <h2>Work Experiences</h2>
                    <TableBody>
                        <TableRow><TableCell>2020.03 ~		</TableCell><TableCell>인공지능신약개발지원센터장</TableCell></TableRow>
                        <TableRow><TableCell>2017.08 ~		</TableCell><TableCell>실험실 창업, 데이터사이언스랩</TableCell></TableRow>
                        <TableRow><TableCell>2017.05 ~		</TableCell><TableCell>행정자치부	전자정부 민관협력포럼 위원</TableCell></TableRow>
                        <TableRow><TableCell>2016.05 ~ 2017.12		</TableCell><TableCell>교통안전공단	교통안전자문위원</TableCell></TableRow>
                        <TableRow><TableCell>2016.02 ~ 2020.02 		</TableCell><TableCell>한국정보화진흥원 정보화정책 저널 편집위원</TableCell></TableRow>
                        <TableRow><TableCell>2015.04 ~ 			</TableCell><TableCell>미래창조과학부 국가정보화 시행계획 검토 전문위원</TableCell></TableRow>
                        <TableRow><TableCell>2014.08.08 ~ 2015.03		</TableCell><TableCell>강원대학교 기획처장</TableCell></TableRow>
                        <TableRow><TableCell>2013.11 ~ 			</TableCell><TableCell>강원대학교 데이터분석센터장</TableCell></TableRow>
                        <TableRow><TableCell>2013.11.19 ~2015.11.18		</TableCell><TableCell>미래창조과학부 국가연구개발정보관리위원회 민간전문위원</TableCell></TableRow>
                        <TableRow><TableCell>2013.08 ~ 2014.08		</TableCell><TableCell>안전행정부	정책자문위원	전자정부분과</TableCell></TableRow>
                        <TableRow><TableCell>2013.08 ~ 2014.05 		</TableCell><TableCell>NIA 빅데이터 공유 활용 체계수립 집필위원장</TableCell></TableRow>
                        <TableRow><TableCell>2013.07 ~ 2013.11	</TableCell><TableCell>미래부(KISTI)	과학기술 빅데이터 거버넌스구축 사업 총괄자문</TableCell></TableRow>
                        <TableRow><TableCell>2013.07			</TableCell><TableCell>미래창조과학부 빅데이터 사업화 컨설팅 사업 심사위원장</TableCell></TableRow>
                        <TableRow><TableCell>2013.04.01 ~	</TableCell><TableCell>KAIST IT융합연구소 겸직교수</TableCell></TableRow>
                        <TableRow><TableCell>2012.07 ~		</TableCell><TableCell>미래창조과학부 빅데이터 포럼 정보공유활용분과위원장</TableCell></TableRow>
                        <TableRow><TableCell>2012.01 ~ 2014.12	</TableCell><TableCell>서비스사이언스학회 부회장</TableCell></TableRow>
                        <TableRow><TableCell>2011.01 ~ 2011.07	</TableCell><TableCell>강원대학교 앱창작터 센터장</TableCell></TableRow>
                        <TableRow><TableCell>2009 ~	2012		</TableCell><TableCell>방송통신위원회, 방송통신서비스 품질평가자문단</TableCell></TableRow>
                        <TableRow><TableCell>2008.12~ 2010. 12	</TableCell><TableCell>행안부 정보화진흥원 u-City 정책전문위원장, u서비스포럼 운영위원</TableCell></TableRow>
                        <TableRow><TableCell>2007.05 ~ 2013.04	</TableCell><TableCell>강원대학교병원 정보화TFT 위원</TableCell></TableRow>
                        <TableRow><TableCell>2005.08 ~ 2011.10 	</TableCell><TableCell>강원도 IT정책실장</TableCell></TableRow>
                        <TableRow><TableCell>2005.01 ~ 2005.08   	</TableCell><TableCell>강원대학교 서울본부장</TableCell></TableRow>
                        <TableRow><TableCell>2002.01 ~       	</TableCell><TableCell>한국정보통신설비학회 기획이사</TableCell></TableRow>
                        <TableRow><TableCell>2001.04 ~ 2004.04 	</TableCell><TableCell>한국창업보육센터협회(KOBIA) 이사</TableCell></TableRow>
                        <TableRow><TableCell>2001.01 ~ 2001.12  	</TableCell><TableCell>한국통신학회 학술위원</TableCell></TableRow>
                        <TableRow><TableCell>1999.07 ~ 2000.07  	</TableCell><TableCell>미국 University of Washington 방문 교수</TableCell></TableRow>
                        <TableRow><TableCell>1995.03 ~ 1999.02  	</TableCell><TableCell>강원대학교 전자계산소장</TableCell></TableRow>
                        <TableRow><TableCell>1992.12 ~ 1993.12  	</TableCell><TableCell>미국 University of California at Berkeley 방문연구원</TableCell></TableRow>
                        <TableRow><TableCell>1988.03.21 ~  		</TableCell><TableCell>강원대학교 IT대학 교수 (컴퓨터정보통신 전공)</TableCell></TableRow>
                    </TableBody>
                </Table>

            </div>
        </section>
    )
}

export default Professor
