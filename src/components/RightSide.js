import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import AwardPage from './AwardPage'
import LeftSide from './LeftSide'

const RightSide = () => {

    const [motivation, setMotivation] = useState("제가 현장 실습에 지원한 이유는 조금 더 컴퓨터공학에 다가가고 싶어서입니다. 현재까지는 학과 공부와 공모전과 같은 대외활동에 의존하여 전공 관련 지식을 습득했습니다.하지만 3학년이 된 이후로부터 학과 공부도 중요하지만 정말 제가 사용할 수 있는 기술이 없다고 판단하였습니다. 이러한 판단을 하고 난 후 저는 다양한 참고서를 사서 새로운 언어를 공부하기도 하고 팀원들과 함께 대외활동과 새로운 프로젝트에 도전하기도 하였지만 제가 원했던 방향과 항상 일치하지는 않았습니다. 이러한 걱정과 실무에 관한 호기심으로 IT 동영상 강의와 전문가의 글을 찾아보면 제가 알지 못하는 실무에서 사용되는 기술이 정말 많았습니다. 현재 친누나 역시 IT 회사에 근무 중에 있는데 제가 IT 공부를 할 때 마다 와서 현재 공부하고 있는 기본적인 언어와 데이터베이스 물론 중요하지만 현재 실무에서 사용 중에 있는 다양한 프레임워크와 API를 찾아보고 경험하라고 조언해주었습니다. 조언 이후에 프레임워크와 다양한 오픈 API를 경험하려 노력 중에 있고, 프로젝트에 직접 사용해보면서 만족감을 느끼고 있었습니다. 이러한 기술을 실제로 사용해보고자 알바몬과 같은 다양한 채용정보를 알아보았지만 아직 학교에 재학 중인 저에게는 좋은 기회가 오지 않았습니다. 저는 이러한 기술을 한번 직접 사용해 보고 싶은 기회를 찾고 있었습니다. 학교에서 현장 실습이라는 좋은 기회를 주었기 때문에 기회를 놓치지 않고, 현장 실습에 참여하여 다양한 기술을 배우고, ")
    const [github, setGithub] = useState("https://github.com/beombeom1119")
    const [blog, setBlog] = useState("https://baam-ki.tistory.com/")


    return (
        <>
            <Accordion >
                <Accordion.Item eventKey="0" className='accordion'>
                    <Accordion.Header>입사 동기</Accordion.Header>
                    <Accordion.Body> {motivation}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='accordion'>
                    <Accordion.Header>학력 사항</Accordion.Header>
                    <Accordion.Body>
                        인천 송천고등학교 2013~2015<br/>
                        성결대학교 2016~2021
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='accordion'>
                    <Accordion.Header>수상 내역</Accordion.Header>
                    <Accordion.Body><AwardPage></AwardPage></Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='accordion'>
                    <Accordion.Header>관련 포토 폴리오</Accordion.Header>
                    <Accordion.Body>
                        <a className='poto' href={github}>Github</a><br/>
                        <a className='poto' href={blog}>Blog</a>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </>
    )
}

export default RightSide
