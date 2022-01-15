import React from "react";
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('newState should be true', () => {

      const state: StateType = {
        collapsed: false
      }

      const newState = reducer(state, {type: TOGGLE_COLLAPSED});

      expect(newState.collapsed).toBe(true);

    }
);

test('with failed action should be error', () => {

      const state: StateType = {
        collapsed: false
      }

      expect(() => reducer(state, { type: 'FAILED' } ) ).toThrowError();
    }
)
