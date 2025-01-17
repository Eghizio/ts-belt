import { pipe, O, A } from '../..'

describe('mapWithDefault', () => {
  it('returns a default value', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.mapWithDefault('default value', _ => 'value'),
      ),
    ).toEqual('default value')
  })

  it('should skip a default value', () => {
    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.mapWithDefault('default value', _ => 'value'),
      ),
    ).toEqual('value')
  })

  it('*', () => {
    expect(
      pipe(
        O.fromNullable(['hello']),
        O.flatMap(A.get(0)),
        O.mapWithDefault('default value', value => `${value} world!`),
      ),
    ).toEqual('hello world!')

    expect(
      pipe(
        O.fromNullable([]),
        O.flatMap(A.get(0)),
        O.mapWithDefault('default value', value => `${value} world!`),
      ),
    ).toEqual('default value')
  })
})
