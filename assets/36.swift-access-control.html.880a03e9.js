import{_ as o,r,o as c,c as d,a as i,b as e,d as a,e as t}from"./app.4659d0e0.js";const s={},n=t('<h1 id="swift基础-访问控制" tabindex="-1"><a class="header-anchor" href="#swift基础-访问控制" aria-hidden="true">#</a> Swift基础 - 访问控制</h1><p>翻译自：https://docs.swift.org/swift-book/LanguageGuide/AccessControl.html</p><p><em>访问控制</em>限制从其他源文件和模块中的代码访问部分代码。此功能使您能够隐藏代码的实现详细信息，并指定可以访问和使用该代码的首选界面。</p><p>您可以为单个类型（类、结构和枚举）以及属于这些类型的属性、方法、初始化器和下标分配特定的访问级别。协议可以限制在特定上下文中，全局常量、变量和函数也是如此。</p><p>除了提供不同级别的访问控制外，Swift还通过为典型场景提供默认访问级别来减少指定显式访问控制级别的需求。事实上，如果您正在编写单个目标应用程序，您可能根本不需要指定显式访问控制级别。</p><p>注意</p><p>代码中可以对其应用访问控制的各个方面（属性、类型、函数等）在以下章节中称为“实体”，以方便简洁。</p><h2 id="模块和源文件" tabindex="-1"><a class="header-anchor" href="#模块和源文件" aria-hidden="true">#</a> 模块和源文件</h2><p>Swift的访问控制模型基于模块和源文件的概念。</p><p><em>模块</em>是代码分发的单个单元，即一个框架或应用程序，作为单个单元构建和发布，并且可以通过另一个具有Swift<code>import</code>关键字的模块导入。</p><p>Xcode 中的每个构建目标（如 app 套装或框架）在 Swift 中被视为一个单独的模块。如果您将应用程序代码的各个方面作为一个独立的框架组合在一起——也许是为了在多个应用程序中封装和重用该代码——那么您在该框架中定义的所有内容都将在应用程序中导入和使用时，或者在另一个框架中使用时，都将成为单独模块的一部分。</p><p><em>源文件</em>是模块中的单个Swift源代码文件（实际上，是应用程序或框架中的单个文件）。虽然在单独的源文件中定义单个类型很常见，但单个源文件可以包含多种类型、函数等的定义。</p><h2 id="访问级别" tabindex="-1"><a class="header-anchor" href="#访问级别" aria-hidden="true">#</a> 访问级别</h2><p>Swift为您的代码中的实体提供了五个不同的<em>访问级别</em>。这些访问级别相对于定义实体的源文件，也相对于源文件所属的模块。</p><ul><li><em>开放访问**和公共访问</em>使实体能够在其定义模块的任何源文件中使用，也可以在导入定义模块的另一个模块的源文件中使用。在指定框架的公共接口时，您通常使用开放或公共访问。开放接入和公共访问之间的区别如下。</li><li><em>内部访问</em>使实体能够在其定义模块的任何源文件中使用，但不能在该模块以外的任何源文件中使用。在定义应用程序或框架的内部结构时，您通常使用内部访问。</li><li><em>文件专用访问</em>将实体的使用限制在自己的定义源文件上。当这些详细信息在整个文件中使用时，使用文件专用访问来隐藏特定功能的实现细节。</li><li><em>私人访问</em>将实体的使用限制为封闭声明，以及同一文件中该声明的扩展名。当特定功能的实现细节仅在单个声明中使用时，使用私有访问来隐藏这些功能的实现细节。</li></ul><p>开放访问是最高（限制最少）的访问级别，私人访问是最低（限制最强）的访问级别。</p>',16),p={href:"https://docs.swift.org/swift-book/LanguageGuide/AccessControl.html#ID16",target:"_blank",rel:"noopener noreferrer"},h=t('<h3 id="访问级别的指导原则" tabindex="-1"><a class="header-anchor" href="#访问级别的指导原则" aria-hidden="true">#</a> 访问级别的指导原则</h3><p>Swift中的访问级别遵循一个总体指导原则：<em>任何实体都不能用另一个访问级别较低（限制性更强）的实体来定义。</em></p><p>例如：</p><ul><li>公共变量不能定义为具有内部、文件私有或私有类型，因为该类型可能并非在使用公共变量的任何地方都可用。</li><li>函数的访问级别不能高于其参数类型和返回类型，因为该函数可以在其组成类型对周围代码不可用的情况下使用。</li></ul><p>下文详细介绍了该指导原则对语言不同方面的具体影响。</p><h3 id="默认访问级别" tabindex="-1"><a class="header-anchor" href="#默认访问级别" aria-hidden="true">#</a> 默认访问级别</h3><p>如果您自己没有指定显式访问级别，代码中的所有实体（如本章后面所述，有几个特定例外）都有内部的默认访问级别。因此，在许多情况下，您不需要在代码中指定显式访问级别。</p><h3 id="单目标应用程序的访问级别" tabindex="-1"><a class="header-anchor" href="#单目标应用程序的访问级别" aria-hidden="true">#</a> 单目标应用程序的访问级别</h3><p>当您编写一个简单的单目标应用程序时，应用程序中的代码通常在应用程序中独立，不需要在应用程序模块之外提供。内部的默认访问级别已经符合此要求。因此，您不需要指定自定义访问级别。但是，您可能希望将代码的某些部分标记为私有或私有文件，以便从应用程序模块中的其他代码中隐藏其实现详细信息。</p><h3 id="框架的访问级别" tabindex="-1"><a class="header-anchor" href="#框架的访问级别" aria-hidden="true">#</a> 框架的访问级别</h3><p>当您开发框架时，请将该框架的面向公众的界面标记为开放或公共，以便其他模块（例如导入框架的应用程序）可以查看和访问。这个面向公众的界面是框架的应用程序编程接口（或API）。</p><p>注意</p><p>框架的任何内部实现详细信息仍然可以使用内部的默认访问级别，或者如果您想从框架内部代码的其他部分隐藏它们，可以标记为私有或文件私有。只有当您希望实体成为框架API的一部分时，您才需要将其标记为开放或公共实体。</p><h3 id="单元测试目标的访问级别" tabindex="-1"><a class="header-anchor" href="#单元测试目标的访问级别" aria-hidden="true">#</a> 单元测试目标的访问级别</h3><p>当您编写具有单元测试目标的应用程序时，应用程序中的代码需要提供给该模块才能进行测试。默认情况下，其他模块只能访问标记为开放或公共的实体。但是，如果您使用<code>@testable</code>属性标记产品模块的导入声明，并在启用测试的情况下编译该产品模块，则单元测试目标可以访问任何内部实体。</p><h2 id="访问控制语法" tabindex="-1"><a class="header-anchor" href="#访问控制语法" aria-hidden="true">#</a> 访问控制语法</h2><p>通过在实体声明的开头放置一个<code>open</code>、<code>public</code>、<code>internal</code>、<code>fileprivate</code>或<code>private</code>修饰符来定义实体的访问级别。</p><ol><li>public class SomePublicClass {}</li><li>internal class SomeInternalClass {}</li><li>fileprivate class SomeFilePrivateClass {}</li><li>private class SomePrivateClass {}</li><li></li><li>public var somePublicVariable = 0</li><li>internal let someInternalConstant = 0</li><li>fileprivate func someFilePrivateFunction() {}</li><li>private func somePrivateFunction() {}</li></ol>',18),u={href:"https://docs.swift.org/swift-book/LanguageGuide/AccessControl.html#ID7",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.swift.org/swift-book/LanguageGuide/AccessControl.html#ID7",target:"_blank",rel:"noopener noreferrer"},f=i("code",null,"SomeInternalClass",-1),b=i("code",null,"someInternalConstant",-1),v=t('<ol><li>class SomeInternalClass {} // implicitly internal</li><li>let someInternalConstant = 0 // implicitly internal</li></ol><h2 id="自定义类型" tabindex="-1"><a class="header-anchor" href="#自定义类型" aria-hidden="true">#</a> 自定义类型</h2><p>如果您想为自定义类型指定显式访问级别，请在定义类型时指定。然后，这种新型可以在访问级别允许的任何地方使用。例如，如果您定义文件私有类，该类只能用作属性的类型，或在定义文件私有类的源文件中用作函数参数或返回类型。</p><p>类型的访问控制级别也会影响该类型<em>成员</em>的默认访问级别（其属性、方法、初始化器和下标）。如果您将类型的访问级别定义为私有或文件私有，则其成员的默认访问级别也将是私有或文件私有。如果您将类型的访问级别定义为内部或公共（或使用内部的默认访问级别，而不显式指定访问级别），则该类型成员的默认访问级别将是内部的。</p><p>重要</p><p>公共类型默认为有内部成员，而不是公共成员。如果您希望类型成员公开，则必须明确将其标记为公开成员。此要求确保类型面向公众的API是您选择发布的内容，并避免错误地将类型的内部工作显示为公共API。</p><ol><li>public class SomePublicClass { // explicitly public class</li><li>​ public var somePublicProperty = 0 // explicitly public class member</li><li>​ var someInternalProperty = 0 // implicitly internal class member</li><li>​ fileprivate func someFilePrivateMethod() {} // explicitly file-private class member</li><li>​ private func somePrivateMethod() {} // explicitly private class member</li><li>}</li><li></li><li>class SomeInternalClass { // implicitly internal class</li><li>​ var someInternalProperty = 0 // implicitly internal class member</li><li>​ fileprivate func someFilePrivateMethod() {} // explicitly file-private class member</li><li>​ private func somePrivateMethod() {} // explicitly private class member</li><li>}</li><li></li><li>fileprivate class SomeFilePrivateClass { // explicitly file-private class</li><li>​ func someFilePrivateMethod() {} // implicitly file-private class member</li><li>​ private func somePrivateMethod() {} // explicitly private class member</li><li>}</li><li></li><li>private class SomePrivateClass { // explicitly private class</li><li>​ func somePrivateMethod() {} // implicitly private class member</li><li>}</li></ol><h3 id="元组类型" tabindex="-1"><a class="header-anchor" href="#元组类型" aria-hidden="true">#</a> 元组类型</h3><p>元组类型的访问级别是该元组中使用的所有类型的访问级别中最严格的。例如，如果您从两种不同类型的元组组成元组，一种具有内部访问，另一种具有私有访问，则该复合元组类型的访问级别将是私有的。</p><p>注意</p><p>元组类型没有像类、结构、枚举和函数那样具有独立的定义。元组类型的访问级别是从构成元组类型的类型自动确定的，并且无法显式指定。</p><h3 id="功能类型" tabindex="-1"><a class="header-anchor" href="#功能类型" aria-hidden="true">#</a> 功能类型</h3><p>函数类型的访问级别计算为函数参数类型和返回类型的最严格的访问级别。如果函数的计算访问级别与上下文默认值不匹配，则必须显式指定访问级别作为函数定义的一部分。</p><p>下面的示例定义了一个名为<code>someFunction()</code>的全局函数，但没有为函数本身提供特定的访问级修饰符。您可能希望此功能具有“内部”的默认访问级别，但事实并非如此。事实上，<code>someFunction()</code>不会按以下内容编译：</p><ol><li>func someFunction() -&gt; (SomeInternalClass, SomePrivateClass) {</li><li>​ // function implementation goes here</li><li>}</li></ol>',15),g={href:"https://docs.swift.org/swift-book/LanguageGuide/AccessControl.html#ID11",target:"_blank",rel:"noopener noreferrer"},_=t('<p>由于函数的返回类型是私有的，因此您必须用<code>private</code>修饰符标记函数的整体访问级别，以便函数声明有效：</p><ol><li>private func someFunction() -&gt; (SomeInternalClass, SomePrivateClass) {</li><li>​ // function implementation goes here</li><li>}</li></ol><p>使用<code>public</code>或<code>internal</code>修饰符标记<code>someFunction()</code>的定义或使用内部的默认设置无效，因为函数的公共或内部用户可能无法适当访问函数返回类型中使用的私有类。</p><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h3><p>枚举的单个案例会自动获得与它们所属枚举相同的访问级别。您无法为单个枚举案例指定不同的访问级别。</p><p>在下面的示例中，<code>CompassPoint</code>枚举具有明确的公共访问级别。因此，<code>north</code>、<code>south</code>、<code>east</code>和<code>west</code>列举案例也有公众的准入级别：</p><ol><li>public enum CompassPoint {</li><li>​ case north</li><li>​ case south</li><li>​ case east</li><li>​ case west</li><li>}</li></ol><h4 id="原始值和相关值" tabindex="-1"><a class="header-anchor" href="#原始值和相关值" aria-hidden="true">#</a> 原始值和相关值</h4><p>用于枚举定义中任何原始值或相关值的类型必须具有至少与枚举访问级别相同的访问级别。例如，您不能使用私有类型作为具有内部访问级别的枚举的原始值类型。</p><h3 id="嵌套类型" tabindex="-1"><a class="header-anchor" href="#嵌套类型" aria-hidden="true">#</a> 嵌套类型</h3><p>嵌套类型的访问级别与其包含类型相同，除非包含类型是公共的。在公共类型中定义的嵌套类型具有内部的自动访问级别。如果您希望公共类型中的嵌套类型公开可用，则必须显式声明嵌套类型为公共类型。</p><h2 id="子分类" tabindex="-1"><a class="header-anchor" href="#子分类" aria-hidden="true">#</a> 子分类</h2><p>您可以对可以在当前访问上下文中访问的任何类进行子类，该类与子类在同一模块中定义。您还可以对其他模块中定义的任何开放类进行子类。一个子类不能比其超类具有更高的访问级别——例如，您不能编写内部超类的公共子类。</p><p>此外，对于在同一模块中定义的类，您可以覆盖在特定访问上下文中可见的任何类成员（方法、属性、初始化器或下标）。对于在另一个模块中定义的类，您可以覆盖任何打开的类成员。</p><p>重写可以使继承的类成员比其超类版本更容易访问。在下面的示例中，类<code>A</code>是一个公共类，其文件私有方法称为<code>someMethod()</code>。<code>B</code>类是<code>A</code>的子类，访问级别为“内部”。尽管如此，<code>B</code>类提供了<code>someMethod()</code>的重写，访问级别为“内部”，高于<code>someMethod()</code>的原始实现：</p><ol><li>public class A {</li><li>​ fileprivate func someMethod() {}</li><li>}</li><li></li><li>internal class B: A {</li><li>​ override internal func someMethod() {}</li><li>}</li></ol><p>子类成员甚至可以调用访问权限低于子类成员的超类成员，只要对超类成员的调用是在允许的访问级别上下文中（即在与文件私有成员调用的超类相同的源文件中，或在与内部成员调用的超类相同的模块中）：</p><ol><li>public class A {</li><li>​ fileprivate func someMethod() {}</li><li>}</li><li></li><li>internal class B: A {</li><li>​ override internal func someMethod() {</li><li>​ super.someMethod()</li><li>​ }</li><li>}</li></ol><p>由于超类<code>A</code>和子类<code>B</code>在同一源文件中定义，因此<code>someMethod()</code>的<code>B</code>实现调用<code>super.someMethod()</code>是有效的。</p><h2 id="常量、变量、属性和下标" tabindex="-1"><a class="header-anchor" href="#常量、变量、属性和下标" aria-hidden="true">#</a> 常量、变量、属性和下标</h2><p>常量、变量或属性不能比其类型更公开。例如，使用私有类型写入公共财产是无效的。同样，下标不能比其索引类型或返回类型更公开。</p><p>如果常量、变量、属性或下标使用私有类型，则常量、变量、属性或下标也必须标记为<code>private</code>：</p><ol><li>private var privateInstance = SomePrivateClass()</li></ol><h3 id="获取者和设置者" tabindex="-1"><a class="header-anchor" href="#获取者和设置者" aria-hidden="true">#</a> 获取者和设置者</h3><p>常量、变量、属性和下标的获取者和设置器会自动接收与他们所属的常量、变量、属性或下标相同的访问级别。</p><p>您可以给设置器比其对应的获取器<em>更低</em>的访问级别，以限制该变量、属性或下标的读写范围。您可以通过在<code>var</code>或<code>subscript</code>介绍器之前编写<code>fileprivate(set)``private(set)</code>或<code>internal(set)</code>分配较低的访问级别。</p><p>注意</p><p>此规则适用于存储属性以及计算属性。即使您没有为存储的属性编写显式获取器和设置器，Swift仍然会合成隐式获取器和设置器，以提供对存储属性备份存储的访问。使用<code>fileprivate(set)``private(set)</code>和<code>internal(set)</code>以与计算属性中的显式setter完全相同的方式更改此合成设置器的访问级别。</p><p>以下示例定义了一个名为<code>TrackedString</code>结构，该结构跟踪字符串属性被修改的次数：</p><ol><li>struct TrackedString {</li><li>​ private(set) var numberOfEdits = 0</li><li>​ var value: String = &quot;&quot; {</li><li>​ didSet {</li><li>​ numberOfEdits += 1</li><li>​ }</li><li>​ }</li><li>}</li></ol><p><code>TrackedString</code>结构定义了一个名为<code>value</code>的存储字符串属性，初始值为<code>&quot;&quot;</code>”（空字符串）。该结构还定义了一个名为<code>numberOfEdits</code>的存储整数属性，用于跟踪该<code>value</code>被修改的次数。此修改跟踪通过<code>value</code>属性上的<code>didSet</code>属性观察器实现，该观察器每次将<code>value</code>属性设置为新值时都会增加<code>numberOfEdits</code>。</p><p><code>TrackedString</code>结构和<code>value</code>属性不提供显式访问级修饰符，因此它们都接收内部的默认访问级别。然而，<code>numberOfEdits</code>属性的访问级别用<code>private(set)</code>修饰符标记，以指示属性的获取器仍然具有内部的默认访问级别，但该属性只能从作为<code>TrackedString</code>结构一部分的代码中设置。这使<code>TrackedString</code>能够在内部修改<code>numberOfEdits</code>属性，但当该属性在结构定义之外使用时，将其显示为只读属性。</p><p>如果您创建<code>TrackedString</code>实例并修改其字符串值几次，您可以看到<code>numberOfEdits</code>属性值更新，以匹配修改次数：</p><ol><li>var stringToEdit = TrackedString()</li><li>stringToEdit.value = &quot;This string will be tracked.&quot;</li><li>stringToEdit.value += &quot; This edit will increment numberOfEdits.&quot;</li><li>stringToEdit.value += &quot; So will this one.&quot;</li><li>print(&quot;The number of edits is (stringToEdit.numberOfEdits)&quot;)</li><li>// Prints &quot;The number of edits is 3&quot;</li></ol><p>Although you can query the current value of the <code>numberOfEdits</code> property from within another source file, you can’t <em>modify</em> the property from another source file. This restriction protects the implementation details of the <code>TrackedString</code> edit-tracking functionality, while still providing convenient access to an aspect of that functionality.</p><p>请注意，如果需要，您可以为获取器和设置器分配显式访问级别。下面的示例显示了<code>TrackedString</code>结构的一个版本，其中该结构以公共的显式访问级别定义。因此，结构的成员（包括numberOfEdits属性）默认具有内部访问级别。您可以通过组合<code>public</code>和<code>private(set)</code>访问级修饰符，使结构的<code>numberOfEdits</code>属性获取器公开，其属性设置器为私有：</p><ol><li>public struct TrackedString {</li><li>​ public private(set) var numberOfEdits = 0</li><li>​ public var value: String = &quot;&quot; {</li><li>​ didSet {</li><li>​ numberOfEdits += 1</li><li>​ }</li><li>​ }</li><li>​ public init() {}</li><li>}</li></ol><h2 id="初始化器" tabindex="-1"><a class="header-anchor" href="#初始化器" aria-hidden="true">#</a> 初始化器</h2>',38),S={href:"https://docs.swift.org/swift-book/LanguageGuide/Initialization.html#ID231",target:"_blank",rel:"noopener noreferrer"},x=i("p",null,"与函数和方法参数一样，初始化器参数的类型不能比初始化器自己的访问级别更私密。",-1),w=i("h3",{id:"默认初始化器",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#默认初始化器","aria-hidden":"true"},"#"),e(" 默认初始化器")],-1),P={href:"https://docs.swift.org/swift-book/LanguageGuide/Initialization.html#ID213",target:"_blank",rel:"noopener noreferrer"},k=i("em",null,"默认初始化器",-1),C=t('<p>默认初始化器具有与初始化的类型相同的访问级别，除非该类型被定义为<code>public</code>。对于定义为<code>public</code>的类型，默认初始化器被视为内部初始化器。如果您希望公共类型在另一个模块中使用无参数初始化器进行初始化，则必须自己显式提供公共无参数初始化器，作为类型定义的一部分。</p><h3 id="结构类型的默认成员初始化器" tabindex="-1"><a class="header-anchor" href="#结构类型的默认成员初始化器" aria-hidden="true">#</a> 结构类型的默认成员初始化器</h3><p>如果结构的任何存储属性是私有的，则结构类型的默认成员初始化器被视为私有。同样，如果结构的任何存储属性是文件私有的，则初始化器是文件私有的。否则，初始化器具有内部访问级别。</p><p>与上面的默认初始化器一样，如果您希望公共结构类型在另一个模块中使用成员初始化器时可以初始化，则必须自己提供公共成员初始化器，作为类型定义的一部分。</p><h3 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h3><p>如果您想为协议类型分配显式访问级别，请在定义协议时这样做。这使您能够创建只能在特定访问上下文中采用的协议。</p><p>协议定义中每个需求的访问级别会自动设置为与协议相同的访问级别。您无法将协议要求设置为与其支持的协议不同的访问级别。这确保了协议的所有要求在任何采用该协议的类型上都可见。</p><p>注意</p><p>如果您定义了公共协议，则协议的要求在实现时需要这些要求的公共访问级别。这种行为与其他类型不同，在这些类型中，公共类型定义意味着类型成员的内部访问级别。</p><h3 id="协议继承" tabindex="-1"><a class="header-anchor" href="#协议继承" aria-hidden="true">#</a> 协议继承</h3><p>如果您定义了从现有协议继承的新协议，则新协议最多可以具有与它继承的协议相同的访问级别。例如，您无法编写从内部协议继承的公共协议。</p><h3 id="协议一致性" tabindex="-1"><a class="header-anchor" href="#协议一致性" aria-hidden="true">#</a> 协议一致性</h3><p>类型可以符合比类型本身更低访问级别的协议。例如，您可以定义一种公共类型，该类型可以在其他模块中使用，但其与内部协议的一致性只能在内部协议的定义模块中使用。</p><p>类型符合特定协议的上下文是类型访问级别和协议访问级别的最低值。例如，如果一种类型是公开的，但它遵守的协议是内部的，则该类型与该协议的一致性也是内部的。</p><p>当您编写或扩展类型以符合协议时，您必须确保该类型对每个协议要求的实现至少与该类型对该协议的一致性具有相同的访问级别。例如，如果公共类型符合内部协议，则该类型对每个协议要求的实现必须至少是内部的。</p><p>注意</p><p>在Swift中，就像在Objective-C中一样，协议一致性是全局的——类型不可能在同一程序中以两种不同的方式遵守协议。</p><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><p>您可以在类、结构或枚举可用的任何访问上下文中扩展类、结构或枚举。在扩展中添加的任何类型成员的默认访问级别与正在扩展的原始类型中声明的类型成员具有相同的默认访问级别。如果您扩展公共或内部类型，您添加的任何新类型成员都有默认的内部访问级别。如果您扩展文件私有类型，则您添加的任何新类型成员都有文件私有的默认访问级别。如果您扩展私有类型，则您添加的任何新类型成员都有默认的私有访问级别。</p><p>或者，您可以使用显式访问级别修饰符（例如<code>private</code>）标记扩展，为扩展中定义的所有成员设置新的默认访问级别。这个新的默认值仍然可以在单个类型成员的扩展中重写。</p><p>如果您使用扩展来添加协议一致性，则无法为扩展提供显式访问级修饰符。相反，协议自己的访问级别用于为扩展中的每个协议需求实现提供默认访问级别。</p><h3 id="扩展中的私人成员" tabindex="-1"><a class="header-anchor" href="#扩展中的私人成员" aria-hidden="true">#</a> 扩展中的私人成员</h3><p>与它们扩展的类、结构或枚举位于同一文件中的扩展名的行为就像扩展中的代码是作为原始类型声明的一部分编写的。因此，您可以：</p><ul><li>在原始声明中声明一个私人成员，并从同一文件中的扩展名访问该成员。</li><li>在一个扩展中声明一个私有成员，并从同一文件中的另一个扩展名访问该成员。</li><li>在扩展名中声明一个私有成员，并从同一文件中的原始声明访问该成员。</li></ul><p>此行为意味着无论您的类型是否有私有实体，您都可以以同样的方式使用扩展来组织代码。例如，给定以下简单的协议：</p><ol><li>protocol SomeProtocol {</li><li>​ func doSomething()</li><li>}</li></ol><p>您可以使用扩展来添加协议一致性，如下所示：</p><ol><li>struct SomeStruct {</li><li>​ private var privateVariable = 12</li><li>}</li><li></li><li>extension SomeStruct: SomeProtocol {</li><li>​ func doSomething() {</li><li>​ print(privateVariable)</li><li>​ }</li><li>}</li></ol><h2 id="通用" tabindex="-1"><a class="header-anchor" href="#通用" aria-hidden="true">#</a> 通用</h2><p>泛型类型或泛型函数的访问级别是泛型类型或函数本身的访问级别及其类型参数上任何类型约束的访问级别的最低值。</p><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2><p>为了访问控制的目的，您定义的任何类型别名都被视为不同的类型。类型别名的访问级别可以小于或等于其别名类型的访问级别。例如，私有类型别名可以别名私有、文件私有、内部、公共或开放类型，但公共类型别名不能别名内部、文件私有或私有类型。</p><p>注意</p><p>此规则也适用于用于满足协议一致性的关联类型的类型别名。</p>',34);function y(I,E){const l=r("ExternalLinkIcon");return c(),d("div",null,[n,i("p",null,[e("开放访问仅适用于类和类成员，它与公共访问不同，允许模块外的代码子类和重写，如下文在"),i("a",p,[e("子类"),a(l)]),e("中讨论。将类标记为开放明确表示您考虑了使用该类作为超类的其他模块代码的影响，并且您相应地设计了类的代码。")]),h,i("p",null,[e("除非另有说明，否则默认访问级别是内部"),i("a",u,[e("的"),a(l)]),e("，如"),i("a",m,[e("默认访问级别"),a(l)]),e("所述。这意味着"),f,e("和"),b,e("可以在没有显式访问级修饰符的情况下编写，并且仍然具有内部访问级别：")]),v,i("p",null,[e("该函数的返回类型是由上面"),i("a",g,[e("自定义类型"),a(l)]),e("中定义的两个自定义类组成的元组类型。其中一类被定义为内部，另一类被定义为私有。因此，复合元组类型的整体访问级别是私有的（元组组成部分类型的最小访问级别）。")]),_,i("p",null,[e("自定义初始化器可以分配小于或等于其初始化类型的访问级别。唯一的例外是必需的初始化器（如"),i("a",S,[e("必需初始化器"),a(l)]),e("中定义）。所需的初始化器必须具有与它所属类相同的访问级别。")]),x,w,i("p",null,[e("如"),i("a",P,[e("默认初始化器"),a(l)]),e("所述，Swift会自动提供"),k,e("，没有任何结构或基类的参数，这些结构或基类为其所有属性提供默认值，并且本身也不提供至少一个初始化器。")]),C])}const A=o(s,[["render",y],["__file","36.swift-access-control.html.vue"]]);export{A as default};