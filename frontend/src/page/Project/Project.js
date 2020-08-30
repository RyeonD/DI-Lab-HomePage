import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    containers: {
        margin:'0 10%',
        fontSize: '15px'
    }
}))
const Project = () => {
    const classes = useStyles();
    return (
        
        <section className = {classes.containers}>
            <div>
                <h2>Projects (2010 ~)</h2>
                
                <ol>
                    <li>시퀀스 데이터 분석 성능 향상을 위한 다차원 임베딩 기술 연구(2019.3.1. ~ 2022.2.28, 연구재단)</li>
                    <li>IoT 환경에서 일반개인정보보호규정에 부합(GDPR Compliant)하는 개인정보 관리 기술 개발(2018.5.1. ~ 2021.12.31, IITP)</li>
                    <li>지능형 디바이스를 위한 사용자 친화적 UI/UX 기술 구현 (2018.5.2. ~ 2018.11.30, IITP)</li>
                    <li>농업 빅데이터 기반 시설원예 최적 생육조건 발굴 (2016.11.29. ~ 2019.11.28, 농림축산식품부)</li>
                    <li>빅데이터 자동 태깅 및 태그 기반 DaaS 시스템 개발 (2016.09.01. ~ 2018.12.31, 미래창조과학부)</li>
                    <li>KOREN을 통한 AI 기반 빅데이터 사전분석기술 실증 연구 (2016.07.12 ~ 2016.12.16, 한국정보화진흥원)</li>
                    <li>지역축제기반의 공급망관리 플랫폼 개발 (2015.09.01. ~ 2016.08.31, 강원정보문화진흥원)</li>
                    <li>ICT 융합 비즈니스 데이터 분석 전문인력 양성 (2013. 11.01 ~ 2018.02.28, 미래창조과학부)</li>
                    <li>스마트 앱 애니메이션 플랫폼 개발 (2013.07.01 ~ 2014.06.30, 강원정보문화진흥원)</li>
                    <li>WTO ITA 확대 협상 대응방안 연구(2012.05 ~ 2012.08, 지식경제부)</li>
                </ol>
            </div>
            <div><br></br></div>
            <div>
                <h2>Publications</h2>
                <h4>International Journal (SCI/SCIE/SCOPUS)</h4>
                <ol>
                    <li>Seong Eun Hong, Hwa Jong Kim and Kyung Jin Cha, “Big Data Preliminary Analysis: A Framework for Easier Data Sharing and Discovery”, International Information Institute, Vol 21. No. 2. pp. 755~764, 2018.02</li>
                    <li>Hwa Jong Kim, “Tracking the Value of Data: Motivation and Requirements”, International Information Institute, Vol 21. No. 2. pp. 745~754, 2018.02</li>
                    <li>Hwa Jong Kim, Soonja Yeom and Kyung Jin Cha, “A Big Data Sharing Methodology with Data Description and Data Browsing”, International Information Institute, Vol 21. No. 1. pp. 745~754, 2018.01</li>
                    <li>Sanghong Ahn, Hyeontaek Oh, Hwa Jong Kim, Jun Kyun Choi, “Data Lifecycle and Tagging for Internet of Things Applications”, AI 2016: Advances in Artificial Intelligence, vol. 9992, pp.691-695, 2016, 12 (Hobart, Australia)(LNAI)</li>
                    <li>Hwa Jong Kim, “DataCon: Easier Data Sharing, Exploration, and Fusion with Automatic Metadata Generation”, AI 2016: Advances in Artificial Intelligence, vol. 9992, pp.708-713, 2016, 12 (Hobart, Australia)(LNAI)</li>
                    <li>Kyung Jin Cha and Hwa Jong Kim, “A sociomateriality Perspective on Information security mangement in ICT outsourcing environment,” Journal of Theoretical and Applied Information Technology(Scopus), 2018</li>
                    <li>Hwa Jong Kim, Tae Sung Kim, Hyuk Min Kwon, Dae Seo Park, Elizaveta Srednik, Kyung Jin Cha, "Towads Better Bilateral Policy Making Decisions: Investigation Of Australia-Related Issues In Korean Media Through Keyword Analysis", Journal of Theoretical and Applied Information Technology, Vol. 96, No. 22, pp.7395-7405, 2018.11</li>
                    <li>Jun Il Bang, Deok Joo Lee, Abida Sultana, Kyung Jin Cha, Hwa Jong Kim, "Working Holiday In Australia: A Social-Data Based Study On The Correlation Between Participants’ Perception And Participation Change", Journal of Theoretical and Applied Information Technology, Vol. 96, No. 22, pp.7424-7434, 2018.11</li>
                    <li>Goo Yeon Lee, Hwa Jong Kim, Choong Kyo Jeong, and Yong Lee, A Contents Service Profit Model Based on the Quality of Experience and User Group Characteristics, 2013. 5. (LNCS)</li>
                    <li>Zhang Jie and Hwa-Jong Kim, "User Feedback Oriented Quality of Experience Management Framework", China Communications, Vol. 10, No. 1, pp. 72-79, Jan. 2013 (ISSN 1673-5447) (SCIE)</li>
                    <li>Goo Yeon Lee, Yong Lee, Hwa Jong Kim, and Choong Kyo Jeong, "Performance Analysis of Authentication and Key Distribution for Mobile Multi-hop Relay in IEEE 802.16j," Personal and Ubiquitous Computing, Vol. 16. pp. 697-706, Aug. 2012 (ISSN 1617-4909) (SCIE)</li>
                </ol>
                <h4>International Conference</h4>
                <ol>
                    <li>Hwa Jong Kim and Seong Eun Hong,“Data Protection Descriptor to Check IoT Devices for Compliance with the EU GDPR”, AIRC019, 2019.12</li>
                    <li>Hyeon Su Lee, Jun Il Bang, Seong Eun Hong, Kyung Jin CHA, Hwa Jong Kim, “The Personal Identification Information Collecting Method  Through Data Embedding Consent”, SMA2019, 2019.12</li>
                    <li>Jun Il Bang, Goo Yeon Lee, Seong Eun Hong, Kyung Jin Cha, Hwa Jong Kim, “Implementing Process of Consenting to the Collection of  Personal Information  of IoT Users According to GDPR”, SMA2019, 2019.12</li>
                    <li>Seong Eun Hong,Jun Il Bang, Tae Joo Park, Kyung Jin Cha, Hwa Jong Kim, “A Study on Metadata for Personal Information Protection in IoT Environment”, SMA2019, 2019.12</li>
                    <li>Goo Yeon Lee, Kyung Jin Cha, Hwa Jong Kim, “Designing the GDPR Compliant Consent Procedure for Personal Information Collection in the Iot Environment”, 2019 IEEE International Congress on Internet of Things(ICIOT), 2019.07</li>
                    <li>Goo Yeon Lee, Hwa Jong Kim, “Performance Analysis of Surveillance Camera System with Image Recognition Server”, InfoWare 2019(IARIA), 2019.07</li>
                    <li>Kim Hwa Jong, Lee Koo Yeon and Cha Kyung Jin, “A User Centric Management Framework for Personal Data Protection“, ALLDATA 2019(IARIA), 2019.03</li>
                    <li>Hwa Jong Kim and Yara Shqairat, “Optimization of Big Data Size for Efficient Transmission and Analysis,” ICAIT, 2018.08.</li>
                    <li>Hwa Jong Kim, Yara Shqairat, Kyung Jin Cha, “Data Protection Descriptor Manager: User-Oriented Security Approach to Manage Access Control Privacy data in IoT, DSSV(Data Science, Statistics and Visualization) 2018.07.</li>
                    <li>Kyung Jin Cha, Elizaveta Srednik and Hwa Jong Kim, “Investigating Influence of North Korea Threat Events on Attractiveness of South Korea for Foreign Visitors,” 10th International Conference on Ubiquitous and Future Networks (ICUFN), 2018.07.</li>
                    <li>Kyung Jin Cha and Hwa Jong Kim, “Designing Conversational User Interface for Artificial Intelligence Devices,” 6th Annual International Conference on Industrial, Systems and Design Engineering, 2018.06. (Athens, Greece)</li>
                    <li>Hwa Jong Kim, “DataCon: Lessons Learned Enabling Easier Data Sharing, Exploration, and Fusion building a DataCon AutoGenerator Module”, International conference on Innovative Trends in Social Sciences, Business and Management Studies, 2017.11 (Tokyo, Japan)</li>
                    <li>Hwa Jong Kim, “Requirements of Data Value Chain Framework in a Data-Driven Business Environment”, Smart Media &amp; Applications(SMA2016), 2016.12 (Hobart, Australia)</li>
                    <li>Seong Eun Hong, Hwa Jong Kim, Kyung Jin Cha. “A Study on Big Data Pre-Analysis for Big Data Sharing Invigoration”, Smart Media &amp; Applications(SMA2016), 2016.12 (Hobart, Australia)</li>
                    <li>Hwa Jong Kim, Soon Ja Yeom, Kyung Jin Cha. “Data-Con: A Comprehensive Data Browsing Service for Real-time Data Sharing and Utilization of Big Data Environment”, Smart Media &amp; Applications(SMA2016), 2016.12 (Hobart, Australia)</li>
                    <li>Elizaveta Srednik, Kyung Jin Cha, and Hwa Jong Kim, “Towards Superior Information Security Performance in the ICT Outsourcing: The Influence of the IS Control Mechanisms Compatibility and Inter-Organizational Relationship </li>
                    <li>Capital”, Smart Media &amp; Applications(SMA2016), 2016.12 (Hobart, Australia)</li>
                    <li>Sanghong Ahn, Hyeontaek Oh, Hwa Jong Kim, Jun Kyun Choi, “Data Lifecycle and Tagging for Internet of Things Applications”, AI 2016: Advances in Artificial Intelligence, pp.691-695, 2016, 12 (Hobart, Australia)(LNCS)</li>
                    <li>Hwa Jong Kim, “DataCon: Easier Data Sharing, Exploration, and Fusion with Automatic Metadata Generation”, AI 2016: Advances in Artificial Intelligence, pp.708-713, 2016, 12 (Hobart, Australia)(LNCS)</li>
                    <li>Jie Zhang, Goo Yeon Lee , Hwa Jong Kim, Yong Lee, “Signal Interference of Ubiquitous Wireless Networks on Data Throughput”, Frontier and Innovation in Future Computing and Communications, 2014.4, vol. 301, pp 357-364</li>
                    <li>Zhang Jie, Kim HwaJong, “Throughput Improvement of a Range-aware WiFi network by Minimizing Signal Interference”, Mesh 2013. 8. 25-31, Barcelona, Spain</li>
                    <li>Zhang Jie, Kim HwaJong, “A hybrid wireless routing for tunnel lighting”, 6th Lighting Conference of China, Japan, Korea 2013 . 8. 23 (Gwangju)</li>
                    <li>Hong SeongEun, Kim HwaJong, “Indoor lighting control system based on analyzing weather information in real-time”, 6th Lighting Conference of China, Japan, Korea 2013 . 8. 23 (Gwangju)</li>
                    <li>Ahn DooHeon, Kim HwaJong, Zhang Jie, “An Efficient Energy-Saving Smart Lighting System Using Ubiquitous Sensor Network”, 6th Lighting Conference of China, Japan, Korea 201 3 . 8. 23 (Gwangju)</li>
                    <li>Jiang WenXian, Kim HwaJong, Zhang Jie, Ahn DooHeon, Hong SeongEun, “A Home Lighting Control System Using a Smartphone  Application”, 6th Lighting Conference of China, Japan, Korea 2013. 8. 23 (Gwangju)</li>
                    <li>Zhang Jie, Kim Hwajong, Ahn Dooheon, “Analysis of Streaming Service Quality Using Data Analytics of Network Parameters”, Data Analytics 2012</li>
                    <li>Kim Hwajong, Lee SeungTaek, Kang IeChul, “The Open Data Interface(ODI) Framework for Public Utilization of Big Data”, Data Analytics 2012</li>
                    <li>Jiang WenXian, Kim HwaJong, Zhang Jie, Ahn DooHeon, “Emotional message transfer system with Smartphone interface and LED lighting fixtures”, CJK2012</li>
                    <li>Ahn Doo Heon, Kim Hwa Jong, Zhang Jie, Jiang WenXian,“User’s action analytic method for providing Smart Lighting System”, CJK2012</li>
                    <li>Zhang Jie, Kim HwaJong, Ahn DooHeon, Jiang WenXian, “Design of wireless based indoor LED lighting fixtures controlling software”, CJK2012</li>
                    <li>Zhang Jie, Kim Hwa-Jong, "Design of Smart LED Lighting Switch with Learning User's Light Controlling Pattern", International Conference on ICT Convergence 2011, 2011. 9. 28-30, Poster, Seoul</li>
                    <li>Ahn Doo-heon, Kim Hwa-Jong, Zhang Jie, "Design and Implementation of Simple Lighting Platform Using Comunication Framework for Smart Lighting System", 4th Lighting Conference of China, japan and Korea, pp. 504-507, 2011. 9. 23, Dalian China</li>
                    <li>Zhang Jie, Ahn Doo-heon, Kim Hwa-Jong, "Intelligent Lighting Control Algorithm with Learning of Human's Life Pattern", 4th Lighting Conference of China, japan and Korea, pp. 500-503, 2011. 9. 23, Dalian China. (중국조명학회,일본조명학회,한국조명전기설비학회)</li>
                    <li>Goo Yeon Lee, Yong Lee, Hwa Jong Kim, Choong Kyo Jeong, "Performance Analysis of Authentication and Key Distribution Scheme for Mobile Multi-hop Relay in IEEE 802.16j", Smartphone 2010, Dec 2010</li>
                    <li>Kim Hwa-Jong, Lee Kyoung-Hyoun, Zhang Jie, "In-service Feedback QoE Framework ", Communication Theory, Reliability, and Quality of Service (CTRQ), Third International Conference, Greece, June 2010</li>
                </ol>

                <h4>Domestic Journal (in Korean)</h4>
                <ol>
                    
                    <li>이구연, 홍성은, 김화종, “트러스트 기반 개인정보수집 동의 판단 기준”, 한국정보기술학회, 18권 2호, 2020.02</li>
                    <li>이용, 김화종, 이구연, "IoT 환경에서 GDPR에 부합하는 선택적 개인정보 동의획득 절차 설계, 디지털콘텐츠학회논문지, Vol.20, No.1, pp.151-160, 2020.02</li>
                    <li>홍성은, 박태주, 방준일, 김화종, “ConvLSTM을 사용한 토마토 생산량 및 성장량 예측 모델에 관한 연구”, 한국정보기술학회, 18권 1호, pp.01-10, 2020.01</li> 
                    <li>이구연, 김화종, “실시간 화상 인식 서버 감시 카메라 최적 구성 연구”, “한국통신학회”, 44권 제6호, pp.1124-1127, 2019.06</li>
                    <li>이구연, 방준일, 차경진, 김화종, “IoT환경에서 GDPR에 부합하는 개인정보수집 동의절차”, 17권 제5호, pp.129-136, 2019.05</li>
                    <li>박대서, 방준일, 김화종, 고영준, "CNN을 이용한 음성 데이터 성별 및 연령 분류 기술 연구", "한국정보기술학회논문지", 16권, 제11호, pp.11-21, 2018.11</li>
                    <li>이구연, 김화종, "화상 감시 카메라 시스템의 최적 구성에 관한 연구", "한국정보기술학회논문지", 16권, 제7호, pp.15-25,2018.07</li>
                    <li>임경규, 이구연, 김화종, “인터넷 쇼핑몰 웹접근성 평가 및 대체 텍스트율 향상 방안 구현”, 디지털콘텐츠학회논문지, 19권, 제3호, pp.537-546, 2018.03</li>
                    <li>박대서, 김화종, “TF-IDF 기반 키워드 추출에서의 의미적 요소 반영을 위한 결합벡터 제안”, 한국정보기술학회, 16권 제2호, pp.1-16, 2018.02</li>
                    <li>최현종, 박영선, 정수미, 김화종, “데이터 마이닝을 통한 지상파 드라마 첫 회 시청률 예측 모형 연구”,  한국정보기술학회, 15권 제1호, pp.1-10, 2017.01</li>
                    <li>박대서, 김화종, “빅데이터의 효과적인 처리 및 활용을 위한클라이언트-서버 모델 설계”,  지능정보연구, 22권, 제4호, pp.109-122, 2016.12</li>
                    <li>김지훈, 홍성은, 김영진, 김화종, “데이터 공유 및 활용을 위한 데이터콘의 개념 및 구현방안 제안”,  한국정보기술학회논문지, 14권 제1호, pp.123-132, 2016.01</li>
                    <li>홍성은, 이구연, 김화종, “공공데이터를 활용한 교통사고 상해 심각도 예측 모델 연구”, 한국정보기술학회논문지, 13권, 제5호, pp.109-118, 2015.05</li>
                    <li>이구연, 김화종, “택시의 운행 데이터에 기반한 최적의 운행 속도 분석”, 한국디지털콘텐츠학회논문지, 16권, 제2호, pp.317-324, 2015.04</li>
                    <li>안두헌, 김화종, “사용자의 서비스 이용시간과 QoE 테이블을 이용한 자동적인 QoE 측정 프레임워크의 제안”, 한국정보기술학회논문지 제12권 제12호 pp.85-93, 2014.12</li>
                    <li>김화종, “빅데이터 이용 확산을 위한 ODI 기반 데이터 엑세스 프레임워크”, 한국통신학회지 31권, 제11호, pp.67-71, 2014.10</li>
                    <li>강문현, 김화종, 안두헌, "하이브리드 무선라우팅 기법의 터널용 통신에서의 응용 시스템", 한국정보기술학회논문지, 12권, 제2호, pp.103-109, 2014.02</li>
                    <li>장걸, 이구연, 김화종 “가변 전송 커버리지 기반의 Wi-Fi 네트워크에서의 데이터 전송률”, 한국디지털콘텐츠학회논문지, 14권, 제3호, pp.349-356, 2013.09</li>
                    <li>장걸, 이구연, 김화종, “Wi-Fi 네트워크간의 신호간섭 및 데이터 전송률 영향 분석”, 대한전자공학회 논문지, 49권, 제11호, pp.11-23, 2012.11</li>
                    <li>김종원, 김화종, 이구연, “사용자 체감 품질 향상을 위한 서비스 개선비용 최적화 방안,”  한국정보기술학회, 10권, 제2호, pp.111-119, 2012.02</li>
                    <li>이상윤, 김화종, “전사 아키텍처(EA)의 효율적 현행화에 관한 연구” 한국정보기술학회, 9권, 제9호, pp.153-162, 2011.09</li>
                    <li>김종원, 이구연, 김화종, “QoE를 이용한 네트워크 콘텐츠 서비스 수익 모델 설계 및 분석”, 전자공학회 논문지, 제48권, 9호, pp.73-80, 2011.09</li>
                    <li>이상윤, 김화종, “정보화 생명주기 기반의 엔터프라이즈 아키텍처 구현에 관한 연구” 한국정보기술학회, 9권, 제7호, pp.223-230, 2011.07</li>
                </ol>
                <h4>Domestic Conference (in Korean)</h4>
                <ol>
                    <li>이영재, 권혁민, 이구연, 김화종, “얼굴사진 보호를 위한 이중 암호화에 관한 연구”, 2019년도 한국통신학회 하계종합학술발표회논문집, pp.1182-1183, 2019.06</li>
                    <li>신주환, 김화종, “선형 회귀 분석을 통한 의료 비용 예측”, 2018 정보통신설비학술대회논문집, pp.159-161, 2018.08</li>
                    <li>방준일, 김화종, “머신러닝 기법들을 활용한 아보카도 가격대 분석 및 예측”, 2018 정보통신설비학술대회논문집, 2018.08</li>
                    <li>홍성은, 차경진, 김화종, “개인정보 관리 시스템에서의 데이터 임베딩 기술 활용 방안에 관한 연구”, 2019 스마트미디어학회 춘계학술대회, pp.324-327, 2019.04</li>
                    <li>방준일, 홍성은, 김화종, “데이터 임베딩을 이용한 음성데이터 분석에 관한 연구”, 2019 스마트미디어학회 춘계학술대회, pp.336-338, 2019.04</li>
                    <li>박태주, 김화종, “환경 데이터를 이용한 토마토 생장량 추정에 대한 연구”, 2019년도 한국통신학회 하계종합학술발표회논문집, pp.977-978, 2019.06</li>
                    <li>이현수, 홍성은, 방준일, 신주환, 김화종, “상태유지 LSTM을 이용한 기온 예측 모델 제작에 대한 연구”, 2019년도 한국통신학회 하계종합학술발표회논문집, pp.1102-1103, 2019.06</li>
                    <li>김선욱, 방준일, 홍성은, 김화종, “인공지능을 활용한 과거 기상 데이터 분석 기반 날씨 예측”, 2019년도 한국통신학회 하계종합학술발표회논문집, pp.969-970, 2019.06</li>
                    <li>신주환, 홍성은, 이현수, 김선욱, 김화종, “LGBM을 통한 대기 오염 정보 데이터 결측치 예측에 대한 연구”, 2019년도 한국통신학회 하계종합학술발표회논문집, pp.1027-1028, 2019.06</li>
                    <li>방준일, 박대서, 안두헌, 김화종, “파이썬 KERAS를 이용한 인공신경망 모델 제작에 대한 연구”, 2018 하계종합학술발표회, 2018.06</li>
                    <li>박대서, 김화종, “LSTM을 활용한 화자 성별 분류 기술 연구”, 2018 하계종합학술발표회, 2018.06</li>
                    <li>권혁민, 김태성, 김화종, 차경진, “스마트팜 재배환경 및 생육 데이터의 시계열 정렬 방안 연구”, 2018 한국지능정보시스템학술대회, 2018.06</li>
                    <li>방준일, 김화종, “IoT 환경에서 딥 러닝의 은닉 층 공유기술 연구”, 2018 동계종합학술발표회, 2018.01</li>
                    <li>이덕주, 김화종, “전국 운전자 교통사고 발생 추이 데이터 분석을 통한 기업 및 국가적 방향 제시 ”, 2018 동계종합학술발표회, 2018.1</li>
                    <li>김나윤, 김화종, “환율과 호주인의 한국 입국간의 상관관계 분석”, 2018 동계종합학술발표회, 2018.01</li>
                    <li>안두헌, 김화종, “오토태깅 기술을 활용한 스마트 시티에서의 프라이버시 보호 데이터 전송 기법에 관한 연구”, 2018 동계종합학술발표회, 2018.01</li>
                    <li>박대서, 김화종, “빅데이터 공유 문제 해결을 위한 신경망 계층 데이터 공유 방안 연구”, 2018 동계종합학술발표회, 2018.01</li>
                    <li>권혁민, 김화종, “텐서플로우 LSTM 모델을 활용한 음식점 방문자수 예측”, 2018 동계종합학술발표회, 2018.01</li>
                    <li>김태성, 박대서, 김화종, “빅데이터를 활용한 스마트 팜 모델 연구”, 2018 동계종합학술발표회, 2018.01</li>
                    <li>한주석, 김화종, “사물 인터넷과 빅 데이터를 이용한 실내 온도 관리 방안 제시”, 2018 동계종합학술발표회, 2018.01</li>
                    <li>권혁민, 홍성은, 박대서, 김화종, 김영진, “최적 생육조건 발굴을 위한 주요 작물모델 분석에 관한 연구”, 2017 하계종합학술발표회, 2017.06</li>
                    <li>박대서, 안두헌, 홍성은, 김화종, “뉴스 기사의 키워드 영향력 분석을 통한 맞춤형 기사 추천 방안 연구”, 2017 하계종합학술발표회, 2017.06</li>
                    <li>한주석, 안두헌, 홍성은, 박대서, 김화종, “데이터 분석을 활용한 최적의 양계장 환경에 관한 연구”, 한국통신학회, 2017 하계종합학술발표회, 2017.06</li>
                    <li>방준일, 안두헌, 홍성은, 박대서, 김화종, “가치 창출을 위한 전력 빅데이터 태깅 분석에 관한 연구”, 한국통신학회, 2017 하계종합학술발표회, 2017.06</li>
                    <li>안두헌, 김화종, 홍성은, 박대서, “스마트 팜 환경에서의 센싱 데이터의 이상치 보정을 위한 In-Service Feedback 시스템의 제안”, 한국통신학회, 2017 하계종합학술발표회, 2017.06</li>
                    <li>김태성, 안두헌, 홍성은, 박대서, 김화종, “뉴욕 택시 빅데이터를 활용한 데이터 분석 기반 택시 서비스 연구”, 한국통신학회, 2017 하계종합학술발표회, 2017.06</li>
                    <li>홍성은, 안두헌, 박대서, 김화종, “전력 데이터 분석을 위한 데이터 분석 프레임워크 방안에 관한 연구”, 한국통신학회, 2017 하계종합학술발표회, 2017.06</li>
                    <li>이평석, 방준일, 홍성은, 김화종, “FreeRTOS와 Bluetooth 모듈을 이용한 자전거 아두이노 키트”,  2017 동계종합학술발표회, 2017.01</li>
                    <li>홍성은, 김영진, 안두헌, 김화종, “농장 데이터 분석을 이용한 최적 생육조건 발굴에 관한 연구”, 2017 동계종합학술발표회, 2017.01</li>
                    <li>권혁민, 김화종, “사고 다발지점 분석을 통한 교통사고 발생 영향요소에 관한 연구”, 2017 동계종합학술발표회, 2017.01</li>
                    <li>홍성은, 안두헌, 김화종, “데이터 마이닝 기법을 이용한 축제 데이터의 분석 연구”, 한국통신학회,  2016년도 하계종합학술발표회, 2016.06</li>
                    <li>안두헌, 김화종, 홍성은, “빅데이터 환경에서의 데이터 공유와 활용 방안 제고를 위한 빅 데이터 분석 프레임워크의 제안”, 한국통신학회, 2016년도 하계종합학술발표회, 2016.06</li>
                    <li>박대서, 안두헌, 홍성은, 김화종, “빅데이터 공유 활성화를 위한 시스템의 제안”, 한국통신학회,, 2016년도 하계종합학술발표회, 2016.06</li>
                    <li>홍성은, 김화종, 안두헌, “사용자의 목적을 반영할 수 있는 음식 추천 시스템의 제안”, 한국통신학회, 2016년도 동계종합학술발표회, 2016.01</li>
                    <li>김지훈, 김화종, 홍성은, “데이터의 파악 및 공유를 위한 데이터콘의구조에 대한 연구”, 한국통신학회, 2016년도 동계종합학술발표회, 2016.01</li>
                    <li>이현구, 김화종, “범죄지수를 이용한 범죄자 예측을 위한 데이터 분석”, 한국통신학회, 2016년도 동계종합학술발표회, 2016.01</li>
                    <li>안두헌, 김화종, 홍성은, “빅 트래픽 해소를 위한 빅 데이터 분석시스템의 제안”, 한국통신학회, 2016년도 동계종합학술발표회, 2016.01</li>
                    <li>정성균, 이구연, 김화종, “비 표면적(非 表面的) 데이터 분석을 활용한 산불 예측 연구”, 한국통신학회 2014년도 추계종합학술발표회, 2014.11</li>
                    <li>신현우, 이구연, 김화종, “세대 간의 정보격차문제 분석 및 해소방안”, 한국통신학회 2014년도 추계종합학술발표회, 2014.11</li>
                    <li>이관호, 이구연, 김화종, “설문 데이터 분석을 통한 게임 셧 다운제의 시행 효과 분석”, 한국통신학회 2014년도 추계종합학술발표회, 2014.11</li>
                    <li>김연준, 김화종, 이구연, “국립대학 공과계열의 학과별 입시경쟁률과 취업률의 연관분석”, 한국통신학회 2014년도 추계종합학술발표회, 2014.11</li>
                    <li>이주호, 김화종, 정충교, “SPDY를 활용한 웹 페이지 로드 타임 분석”, 한국통신학회 2014년도 하계종합학술발표회, 2014.06</li>
                    <li>홍성은, 김화종, 안두헌, “애니메이션 앱 생성 플랫폼의 소개와 가능성에 대한 연구”, 한국통신학회 2014년도 하계종합학술발표회, 2014.06</li>
                    <li>김지훈, 김화종, 안두헌, “스마트앱용 애니메이션 플랫폼 개발”, 한국통신학회 2014년도 하계종합학술발표회, 2014.06</li>
                    <li>안두헌, 김화종, “스마트 앱 개발을 위한 Animation Creation Platform", 한국통신학회 2014년도 하계종합학술발표회, 2014.06</li>
                    <li>안두헌, 김화종, “애니메이션 제작을 위한 Animation Creation Platform 서비스 모델”, 한국통신학회 2014년도 하계종합학술발표회, 2014.06</li>
                    <li>강문현, 김화종, 장걸, 안두헌, 홍성은, “스마트폰을 이용한 홈라이팅 시스템 제어에 관한 연구”, 한국통신학회 2013년도 하계종합학술발표회, 2013.06</li>
                    <li>홍성은, 김화종 “GPS정보를 이용한 나만의 여행길 공유 및 추천 시스템”, 한국통신학회 2013년도 하계종합학술발표회, 2013.06</li>
                    <li>안두헌, 김화종, “Open Data Interface를 통한 공유 데이터제공 서비스,” 서비스사이언스학회 추계학술대회. 2012.12</li>
                    <li>안두헌, 김화종, “유비쿼터스 센서 네트워크를 이용한 효율적인 에너지 절약형 스마트 조명 시스템,” 제 14회 전자정보통신학술대회, 한국통신학회, 2012.07</li>
                    <li>강문현,김화종, “스마트폰을 이용하여 LED/LCD을 제어한 Smart Light시스템에 관한 연구”- 한국통신학회 하계학술발표대회, 2012.06</li>
                    <li>장걸, 김화종, “Video error rate prediction with Bayesian Network on wireless real-time multimedia service”, 한국통신학회 하계종합학술발표회, 2012.06</li>
                    <li>안두헌, 김화종, 장걸, 강문현, “빅데이터 분석을 이용한 QoE 측정 방안, 한국통신학회 하계종합학술발표회, 2012.06</li>
                    <li>장걸, 김화종, 길정수, 김훈, “Simple Lighting Platform 통신시스템 개발에 관한 연구”, 조명전기설비학회 춘계학술발표대회</li>
                    <li>장걸, 김화종, “K-means 클러스터링 기법을 적용한 네트워크서비스 이용자 체감품질 평가방안”, 서비스사이언스학회 춘계학술대회,  2012.04</li>
                    <li>김화종, 최방범, 김원기, “자연과 함께하는 사무공간 네이처오피스서비스”,  2011 서비스사이언스학회 추계학술대회, pp99-102, 2011.10</li>
                    <li>이경현, 김화종, "모바일 환경에서의 이용자체감품질의 측정방안", 2010년 한국통신학회 추계종합학술대회 논문집, p.380, 2010.11</li>
                    <li>안두헌, 김화종, 장걸, "에이전트를 이용한 QoE측정 프레임워크의 제안", 2010년 한국통신학회 추계종합학술대회 논문집, p.376, 2010.11</li>
                    <li>박종건, 김화종, 장걸, "QoE관리 프레임워크기반의 실험설계", 2010년 한국통신학회 추계종합학술대회 논문집, p.363, 2010.11</li>
                    <li>안두헌, 김화종, 장걸, "스마트조명시스템 제어를 위한 통신 프레임워크의 설계", 2010년 한국통신학회 추계종합학술대회 논문집, p.339, 2010.11</li>
                    <li>장걸, 김화종, "A statistic QoE analysis scheme for environmental dominant reason extraction on service quality falling instance", 2010년 한국통신학회 추계종합학술대회 논문집, p.266, 2010.11</li>
                    <li>장걸, 김화종, "A framework for Quality of Experience management based on evaluation of user feedback", 2010년 한국통신학회 추계종합학술대회 논문집, p265, 2010.11</li>
                    <li>박종건, 김화종, 안두헌, "u-City 서비스 및 기술분류에서 픽토그램의 활용방안 연구", 한국통신학회2010 하계 학술대회, 2010.07</li>
                    <li>이경현, 김화종, "Ubiquitous Service에서의 이용자체감품질관리에 관한 연구", 한국통신학회2010 하계 학술대회, 2010.07</li>
                    <li>이경현, 김화종, "Ubiquitous Service에서의 QoE에 관한 연구", IT서비스학회 2010 춘천학술발표대회, 2010.05</li>
                    <li>이경현, 김화종, "집단지성과 전문가시스템을 이용한 전문지식관리를 위한 소셜네트워크 서비스의 설계", IT서비스학회 2010 춘천학술발표대회, 2010.05</li>
                </ol>
                <h4>Patent</h4>
                <ol>
                    <li>김화종, 홍성은, 방준일, “음성 인식 장치 및 방법” 2018.12.28. (출원번호 : 10-2018-0172209)</li>
                    <li>김화종, 홍성은, 방준일, “다차원 임베딩을 이용한 시퀀스 데이터 태깅 방법 및 장치” 2018.12.28. (출원번호 : 10-2018-0172210)</li>
                    <li>이구연, 김화종, 차경진, “IoT 시스템에서의 개인정보수집 동의 절차 제공 방법 및 이를 수행하는 장치들”, 2018.12 (출원번호 : 10-2018-0155811)</li>
                    <li>김화종, “로우 데이터 처리 장치 및 방법”, 2017.01.26 (출원번호 10-2015-0079999/등록:10-1702755), 특허권자 : 강원대학교산학협력단, 등록존속만료일: 2035년 6월 5일</li>
                    <li>김화종, 장걸, 안두헌, “무선통신을 기반으로 하는 조명 제어 시스템” 2014.07.22 (등록번호 10-1424342)</li>
                    <li>김화종, 장걸, 안두헌, 강문현, “실시간 날씨정보 데이터 분석 기반의 실내 LED 조명 제어 시스템 및 방법”, 등록 2014.05.14 (등록번호 10-1397807-0000)</li>
                    <li>김화종, “키오스크 제어 시스템,” 2013.11.28 (등록번호 10-2011-0099816)</li>
                    <li>김화종, 장걸, 안두헌, “액세스 포인트 장치에서의 송신강도 설정 방법” (등록 번호 10-1248764) 2013.03.25</li>
                    <li>김화종, “브랜드 정보를 이용한 통신방법 및 이를 위한 브랜드 스위칭 서버” (등록 번호 10-1100249) 2011.12.22</li>
                    <li>김화종, 이미희, 최중희, 김상규, “건강관리 지원 방법 및 이를 구현하기 위한 휴대용 단말기용 프로그램을 기록한 기록매체” (등록 번호 10-1091019) 2011.12.01</li>
                    <li>김화종, 이미희, 최중희, “휴대용 단말기의 위급상황 알림 장치 및 방법” (등록 번호 10-1078223) 2011.10.25</li>
                    <li>김화종, 이구연, 정충교, 장걸, “다중 경로 라우팅 시스템 및 방법” (등록 번호 10-1071366), 2011.09.30</li>
                    <li>김화종, 정장호 and J. P. Linnartz, "Virtual Cellular Network and communication protocol thereof," 러시아 특허, 특허번호 2123237, 1998</li>
                    <li>김화종, J. P. Linnartz, 정장호, "가상 셀룰라 통신망과 그 통신방법," 한국특허 제 94-26619, 1997</li>
                </ol>
            </div>
        </section>
    )
}

export default Project
