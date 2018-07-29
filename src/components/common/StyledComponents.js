import React, { Component } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const ToDoListWrapper = styled.ul`
    width: 60%;
    list-style-type:none;
    display: inline-block;
    padding-left: 0;
`;

export const ToDoListItem = styled.li`
    padding: 10px;
    border: 1px solid #eee;
    text-align: left;
    margin-bottom: 5px;
    text-decoration: ${props => props.isCompleted?'line-through': 'none'}
`;

export const TextCenter = styled.div`
    text-align: center;
`;

export const NoDataFound = styled.li`
    font-size: 20px;
    font-weight: 700;
`;

export const DeleteButton = styled.span`
    float: right;
    cursor: pointer;
`;

export const TextInput = styled.input`
    padding: 10px;
    width: 58%;
    font-size: 20px;
`;

export const CompleteButton = styled.span`
    float: right;
    cursor: pointer;
    font-size: 13px;
    margin-right: 15px;
    color: ${props => !props.isCompleted?'green':'red'}
`;