import React from 'react';
import { Table } from '../components/table/table';
import { Row } from '../components/table/row';
import { formatMoney } from '../common/functions';

export const TableTransactions = props => {
    
    const {
        list
    } = props;

    console.log(list);
    
    
    return (
        <Table>
            <thead>
                <Row>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Card</th>
                </Row>
            </thead>
            <tbody>
                {
                    list.map((e, i) => {
                        return <Row key={i}>
                            <td>{formatMoney(e.amount, 2)}</td>
                            <td>{e.date}</td>
                            <td>{e.card_last_four.padStart(12, "*")}</td>
                        </Row>
                    })
                }
            </tbody>
        </Table>
    )
} 