import { config, graph } from '@grafbase/sdk'

const g = graph.Standalone()

g.query('helloWorld', {
  resolver: 'return-string',
  returns: g.string()
})

export default config({
  graph: g
})
