import React from "react";
import classes from './Navbar.module.scss';
import { Row, Col } from 'antd'
import styled from "styled-components";
import img1 from '../../Assets/Icons/React.png';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineProject } from 'react-icons/ai';
import { ImFileText2 } from 'react-icons/im';
import { MdOutlineContactMail } from 'react-icons/md';
import { LuLaptop2 } from 'react-icons/lu'
import {Icontext,P} from './Navbar.styled'

function Navbar() {
    return (
        <div className={classes.main_container}>
            <Row>

                <Col span={2} offset={4}>
                    <div className={classes.logocontainer}>
                        <div >
                            <img src={img1} alt="" className={classes.image} />
                        </div>
                        <Icontext>
                            Dev._io
                        </Icontext>
                    </div>
                </Col>

                <Col span={2} offset={5}>
                    <div className={classes.navitem}>
                        <div>

                            <AiOutlineHome className={classes.icon} size={20} />
                        </div>
                        <P className={classes.nav_text}>Home</P>
                    </div>
                </Col>
                <Col span={2}>
                    <div className={classes.navitem}>
                        <div>

                            <AiOutlineUser className={classes.icon} size={20} />
                        </div>
                        <P className={classes.nav_text}>About</P>
                    </div>
                </Col>
                <Col span={2}>
                    <div className={classes.navitem}>
                        <div>

                            <ImFileText2 className={classes.icon} size={20} />
                        </div>
                        <P className={classes.nav_text}>Skill</P>
                    </div>
                </Col>
                <Col span={2}>
                    <div className={classes.navitem}>
                        <div>

                            <AiOutlineProject className={classes.icon} size={20} />
                        </div>
                        <P className={classes.nav_text}>Project</P>
                    </div>
                </Col>
                <Col span={2}>
                    <div className={classes.navitem}>
                        <div>

                            <MdOutlineContactMail className={classes.icon} size={20} />
                        </div>
                        <P className={classes.nav_text}>Feed</P>
                    </div>
                </Col>
                <Col span={2}>
                    <div className={classes.navitem}>
                        <div>

                            <LuLaptop2 className={classes.icon} size={20} />
                        </div>
                        <P className={classes.nav_text}>Contact</P>
                    </div>
                </Col>

            </Row>
        </div>
    );
}

export default Navbar;
