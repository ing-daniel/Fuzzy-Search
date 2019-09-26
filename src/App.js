import React, {useEffect, useState, Fragment} from 'react';
import { _get } from './common/http';
import { Title } from './components/title';
import { TableTransactions } from './containers/table-transactions';
import { ContainerGlobal } from './components/conatiner-global';
import { Input } from './components/input';
import { levenshtein } from './common/fruzzysearch';
import { Logo } from './components/logo';
import Transaction from './models/transaction.model';
import { formatMoney } from './common/functions';

export const App = () =>{

    const [states, setState] = useState({
        transactions: [],
        filter: ''
    });

    const changeFilter  =(filter) =>{
        setState({...states, filter});
    }

    const filter = () =>{
        if(states.filter === '') return states.transactions;
        let _transaction = new Transaction();
        return states.transactions.filter( e => {
            _transaction = { ...e, amount: formatMoney(e.amount, 2), date: e.date.replace("T", "")};
            const a = levenshtein(states.filter ,_transaction.amount, 0.8);
            const d = levenshtein(states.filter ,_transaction.date, 0.8);
            const c = levenshtein(states.filter ,_transaction.card_last_four, 0.8);
            return a || d || c;
        });
    }

    useEffect(() =>{
        _get('zc5ht')
        .then(res => {
            const {transactions} = res.data;
            setState({...states, transactions})
        })
        .catch(err => console.error(err))
    },[])

    return(
        <ContainerGlobal>
            <div style={{textAlign:'center'}}>
                <Logo src='https://clip.mx/logo-clip.svg'></Logo>
            </div>
            <Title>List transactions</Title>
            <br />
            <Input placeholder='Text search' onChange={(e) => changeFilter(e.target.value)}></Input>
            <TableTransactions list={filter()} />
        </ContainerGlobal>
    )
}