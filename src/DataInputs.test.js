import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import DataInputs from './DataInputs'

test('invoke onsubmit handler passed on form submit', () => {
    jest.spyOn(global, 'fetch')
        .mockImplementation(() => Promise.resolve())

    const expectedBody = {
        "number_of_agents": 10000,
        "disease_name": "small_pox",
        "grid_size": 250,
        "simulation_hrs": 10000,
        "public_transport_percentage": 0.2,
        "working_percentage": 0.7,
        "vaccinate_at": 5000,
        "vaccinate_percentage": 0.2
    }

    const onSubmitSpy = jest.fn()
    const { getByTestId } = render(<DataInputs onSubmit={onSubmitSpy} />)

    fireEvent.submit(getByTestId('simulationForm'))

    expect(onSubmitSpy).toHaveBeenCalledWith()

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch.mock.calls[0][0]).toBe("http://localhost:3000/simulation/init")
    expect(global.fetch.mock.calls[0][1].method).toBe("POST")
    expect(global.fetch.mock.calls[0][1].body).toBe(JSON.stringify(expectedBody))
})