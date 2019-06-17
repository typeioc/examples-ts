import gettingStarted from '../getting-started'
import factoryRegistration from '../factory-registration'
import typeRegistration from '../type-registration'
import selfRegistration from '../self-registration'
import valueRegistration from '../value-registration'
import registrationMetadata from '../registration-metadata'
import transientScope from '../transient-scope'
import singletonScope from '../singleton-scope'
import instancePerContainer from '../instance-per-container-scope'
import resolution from '../resolution'
import dynamicDependencies from '../dynamic-dependencies'
import cachedResolution from '../cached-resolution'
import circularDependency from '../circular-dependency'
import lazyResolution from '../lazy-resolution'
import decoratorServiceRegistration from '../decorator-service-registration'
import decoratorDependenciesResolution from '../decorator-dependencies-resolution'
import decoratorLazyResolution from '../lazy-resolution-decorator'
import interceptors from '../interceptors'
import interceptorChain from '../interceptor-chains'

const result: { name: string, value: string }[] = [
    { name: 'Getting Started', value: gettingStarted },
    { name: 'Factory registration', value: factoryRegistration },
    { name: 'Type registration', value: typeRegistration },
    { name: 'Self registration', value: selfRegistration },
    { name: 'Value registration', value: valueRegistration },
    { name: 'Registration metadata', value: registrationMetadata },
    { name: 'Transient instance', value: transientScope },
    { name: 'Singleton instance', value: singletonScope },
    { name: 'Instance per container', value: instancePerContainer },
    { name: 'Resolution', value: resolution },
    { name: 'Dynamic dependencies', value: dynamicDependencies },
    { name: 'Cached resolution', value: cachedResolution },
    { name: 'Circular dependency', value: circularDependency },
    { name: 'Lazy resolution', value: lazyResolution },
    { name: 'Decorator service registration', value: decoratorServiceRegistration},
    { name: 'Decorator dependencies resolution', value: decoratorDependenciesResolution },
    { name: 'Decorator lazy resolution', value: decoratorLazyResolution },
    { name: 'Interceptors', value: interceptors },
    { name: 'Interceptor chain', value: interceptorChain }
]

export default result
