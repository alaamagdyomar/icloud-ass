import React from "react";
import styles from './header.module.scss'
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip, Badge, Space  } from "antd";

const Sidebar = () =>{
    return (
        <div className={styles.header}>
            <div className={styles.parags}>
                <p className={styles.firstP}>Welcome to My Company!</p>
                <p className={styles.secondP}>You have started your 30 day trial</p>
            </div>
            <div className={styles.avatar}>
                <>
                <Avatar.Group
                    maxCount={6}
                    maxPopoverTrigger="click"
                    size="large"
                    maxStyle={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                        cursor: "pointer"
                    }}
                    >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar
                        style={{
                        backgroundColor: "#f56a00"
                        }}
                    >
                        K
                    </Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar
                        style={{
                            backgroundColor: "#87d068"
                        }}
                        icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Avatar
                        style={{
                        backgroundColor: "#1677ff"
                        }}
                        icon={<AntDesignOutlined />}
                    />
                </Avatar.Group>
                <div className={styles.avatarP}>
                <p className={styles.firstAvatarP}>Our architects are here to help</p>
                <p className={styles.secondAvatarP}>Book a free session</p>
                </div>
                </>
            </div>
            <div className={styles.badges}>
            <Space size="middle">
                <Badge count={5}>
                <Avatar shape="circle" size="large" />
                </Badge>
                <Badge count={5}>
                <Avatar shape="circle" size="large" />
                </Badge>
            </Space>
            </div>        
        </div>
    )
}

export default Sidebar;