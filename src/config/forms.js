
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
                        label: 'Quantity',
                        icon: <FaSortNumericUp style={{ paddingBottom: '5px' }} />,
                        kind: 'input',
                        type: 'number',
                        name: 'quantity',
                        value: 1,
                    },
                    {
                        label: 'Address',
                        icon: <FaHome style={{ paddingBottom: '5px' }} />,
                        kind: 'input',
                        type: 'text',
                        name: 'address',
                        placeholder: 'Address',
                    },
                    {
                        label: 'Payment Details',
                        kind: 'payment',
                        icon: <FaCreditCard style={{ paddingBottom: '5px' }} />,
                    }
                ]
            },
            {
                title: "Address",
                titleIcon: <FaWineBottle style={{ paddingBottom: '5px' }} />,
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
                        label: 'Address',
                        icon: <FaHome style={{ paddingBottom: '5px' }} />,
                        kind: 'input',
                        type: 'text',
                        name: 'address',
                        placeholder: 'Address',
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