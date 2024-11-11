'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

// 사용자 객체 정의
const user1 = {
    name: 'Ritsu',
    avatarUrl: '/profile_Ritsu.jpg',
};

const user2 = {
    name: 'Mob',
    avatarUrl: '/profile_Mob.jpg',
};

// 코멘트 배열, 인수 user는 user1, user2 중 하나를 참조
const arrComment = [
    { cont: '코멘트1', date: '2024.11.11', user: user1 },
    { cont: '코멘트2', date: '2024.11.12', user: user2 },
    { cont: '코멘트3', date: '2024.11.13', user: user1 },
];

// 유저 정보 컴포넌트
const UserInfo = ({ user }) => {
    return (
        <UserInfoStyled>
            <Image src={user.avatarUrl} alt={user.name} width="100" height="100" />
            <strong>{user.name}</strong>
        </UserInfoStyled>
    );
};

const UserInfoStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    img {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

// 한 개 댓글 컴포넌트
const CommentItem = ({ cont, date, user }) => {
    // const { cont, date, user } = props;
    return (
        <CommentItemStyled>
            <UserInfo user={user} />
            <p>{cont}</p>
            <span>{date}</span>
        </CommentItemStyled>
    );
};

const CommentItemStyled = styled.div`
    p {
        margin-top: 10px;
        display: block;
        font-size: 18px;
    }
    span {
        font-size: 14px;
    }
`;

// 코멘트 컴포넌트: 전체 코멘트 목록
const Comment = () => {
    return (
        <div className="flex flex-col gap-5">
            {arrComment.map((item, index) => (
                <CommentItem key={index} cont={item.cont} date={item.date} user={item.user} />
            ))}
        </div>
    );
};

export default Comment;
