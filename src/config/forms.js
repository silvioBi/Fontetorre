
import React from 'react'
import { FaHome, FaSync, FaMoneyBill, FaSortNumericUp, FaCreditCard, FaWineBottle, FaShippingFast } from 'react-icons/fa'

const forms = {

    buy: {
        tabs: [
            {
                title: "Shipping Details",
                titleIcon: <FaShippingFast style={{ paddingBottom: '5px' }} />,
                fields: [
                    {
                        kind: 'address',
                    },
                ]
            },
            {
                title: "Payment details",
                titleIcon: <FaCreditCard style={{ paddingBottom: '5px' }} />,
                fields: [
                    {
                        label: 'Quantity',
                        icon: <FaSortNumericUp style={{ paddingBottom: '5px' }} />,
                        kind: 'input',
                        type: 'number',
                        name: 'quantity',
                        value: 1,
                    },
                    {
                        label: 'Payment Details',
                        kind: 'payment',
                        icon: <FaCreditCard style={{ paddingBottom: '5px' }} />,
                    }
                ]
            }
        ]
    }
}

export default forms