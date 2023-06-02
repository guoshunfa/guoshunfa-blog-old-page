import{_ as n,r as l,o as d,c as r,a as e,b as i,d as t,e as c}from"./app.4659d0e0.js";const a={},h=e("h1",{id:"swift基础-错误处理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#swift基础-错误处理","aria-hidden":"true"},"#"),i(" Swift基础 - 错误处理")],-1),s=e("p",null,"翻译自：https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html",-1),u=e("p",null,[e("em",null,"错误处理"),i("是响应程序中的错误条件并从中恢复的过程。Swift为在运行时抛出、捕获、传播和操作可恢复错误提供一流的支持。")],-1),p=e("p",null,"一些操作不能保证总是完成执行或产生有用的输出。可选用于表示值的缺失，但当操作失败时，了解导致故障的原因通常是有用的，以便您的代码可以做出相应的响应。",-1),f=e("p",null,"例如，考虑从磁盘上的文件中读取和处理数据的任务。此任务有多种方式可能失败，包括文件在指定路径上不存在，文件没有读取权限，或文件没有以兼容格式编码。区分这些不同情况允许程序解决一些错误，并向用户传达任何无法解决的错误。",-1),m=e("p",null,"注意",-1),g=e("code",null,"NSError",-1),w={href:"https://developer.apple.com/documentation/swift/cocoa_design_patterns/handling_cocoa_errors_in_swift",target:"_blank",rel:"noopener noreferrer"},v=c('<h2 id="表示和抛出错误" tabindex="-1"><a class="header-anchor" href="#表示和抛出错误" aria-hidden="true">#</a> 表示和抛出错误</h2><p>在 Swift 中，错误由符合<code>Error</code>协议的类型值表示。这个空协议表示一种类型可用于错误处理。</p><p>Swift枚举特别适合对一组相关错误条件进行建模，相关值允许传达有关错误性质的额外信息。例如，以下是您如何表示在游戏中操作自动售货机的错误条件：</p><ol><li>enum VendingMachineError: Error {</li><li>​ case invalidSelection</li><li>​ case insufficientFunds(coinsNeeded: Int)</li><li>​ case outOfStock</li><li>}</li></ol><p>抛出错误可以让您表明发生了意想不到的事情，正常的执行流程无法继续。您使用<code>throw</code>出语句抛出错误。例如，以下代码会抛出一个错误，表明自动售货机还需要五枚硬币：</p><ol><li>throw VendingMachineError.insufficientFunds(coinsNeeded: 5)</li></ol><h2 id="处理错误" tabindex="-1"><a class="header-anchor" href="#处理错误" aria-hidden="true">#</a> 处理错误</h2><p>当抛出错误时，一些周围的代码必须负责处理错误——例如，通过纠正问题、尝试替代方法或通知用户故障。</p><p>有四种方法可以处理 Swift 中的错误。您可以将错误从函数传播到调用该函数的代码，使用<code>do</code>-<code>catch</code>语句处理错误，将错误作为可选值处理，或断言不会发生错误。每种方法都在下面的一节中描述。</p><p>当函数抛出错误时，它会改变程序的流程，因此您可以快速识别代码中可能抛出错误的地方非常重要。要识别代码中的这些位置，请编写<code>try</code>关键字或<code>try?</code>或者<code>try!</code>变化—在调用可能抛出错误的函数、方法或初始化器的代码之前。以下各节介绍了这些关键词。</p><p>注意</p><p>Swift中的错误处理类似于其他语言中的异常处理，使用<code>try</code>、<code>catch</code>和<code>throw</code>关键字。与包括Objective-C在内的许多语言中的异常处理不同，Swift中的错误处理不涉及解开调用堆栈，这个过程在计算上可能很昂贵。因此，<code>throw</code>语句的性能特征与<code>return</code>语句的性能特征相当。</p><h3 id="使用抛出函数传播错误" tabindex="-1"><a class="header-anchor" href="#使用抛出函数传播错误" aria-hidden="true">#</a> 使用抛出函数传播错误</h3><p>要指示函数、方法或初始化器可以抛出错误，您可以在函数的声明中在其参数后面写入<code>throws</code>关键字。标有<code>throws</code>函数称为<em>抛出函数</em>。如果函数指定了返回类型，则在返回箭头（<code>-&gt;</code>）之前写入<code>throws</code>关键字。</p><ol><li>func canThrowErrors() throws -&gt; String</li><li></li><li>func cannotThrowErrors() -&gt; String</li></ol><p>抛出函数将抛出在其中的错误传播到调用它的范围。</p><p>注意</p><p>只有抛出函数才能传播错误。在非投掷函数内抛出的任何错误都必须在函数内处理。</p><p>在下面的示例中，<code>VendingMachine</code>类有一个<code>vend(itemNamed:)</code>方法，如果请求的项目不可用、缺货或成本超过当前存款金额，则抛出适当的<code>VendingMachineError</code>：</p><ol><li>struct Item {</li><li>​ var price: Int</li><li>​ var count: Int</li><li>}</li><li></li><li>class VendingMachine {</li><li>​ var inventory = [</li><li>​ &quot;Candy Bar&quot;: Item(price: 12, count: 7),</li><li>​ &quot;Chips&quot;: Item(price: 10, count: 4),</li><li>​ &quot;Pretzels&quot;: Item(price: 7, count: 11)</li><li>​ ]</li><li>​ var coinsDeposited = 0</li><li></li><li>​ func vend(itemNamed name: String) throws {</li><li>​ guard let item = inventory[name] else {</li><li>​ throw VendingMachineError.invalidSelection</li><li>​ }</li><li></li><li>​ guard item.count &gt; 0 else {</li><li>​ throw VendingMachineError.outOfStock</li><li>​ }</li><li></li><li>​ guard item.price &lt;= coinsDeposited else {</li><li>​ throw VendingMachineError.insufficientFunds(coinsNeeded: item.price - coinsDeposited)</li><li>​ }</li><li></li><li>​ coinsDeposited -= item.price</li><li></li><li>​ var newItem = item</li><li>​ newItem.count -= 1</li><li>​ inventory[name] = newItem</li><li></li><li>​ print(&quot;Dispensing (name)&quot;)</li><li>​ }</li><li>}</li></ol><p><code>vend(itemNamed:)</code>方法的实现使用<code>guard</code>语句提前退出方法，如果不符合购买零食的任何要求，则会抛出适当的错误。由于<code>throw</code>出语句会立即传输程序控制，因此只有在满足所有这些要求的情况下才会对项目进行修改。</p><p>由于<code>vend(itemNamed:)</code>方法传播它抛出的任何错误，因此任何调用此方法的代码都必须使用<code>do</code>-<code>catch</code>语句、<code>try?</code>或<code>try!</code>处理错误，或继续传播它们。例如，以下示例中的<code>buyFavoriteSnack(person:vendingMachine:)</code>也是一个抛出函数，<code>vend(itemNamed:)</code>方法抛出的任何错误都将传播到调用<code>buyFavoriteSnack(person:vendingMachine:)</code>函数的点。</p><ol><li>let favoriteSnacks = [</li><li>​ &quot;Alice&quot;: &quot;Chips&quot;,</li><li>​ &quot;Bob&quot;: &quot;Licorice&quot;,</li><li>​ &quot;Eve&quot;: &quot;Pretzels&quot;,</li><li>]</li><li>func buyFavoriteSnack(person: String, vendingMachine: VendingMachine) throws {</li><li>​ let snackName = favoriteSnacks[person] ?? &quot;Candy Bar&quot;</li><li>​ try vendingMachine.vend(itemNamed: snackName)</li><li>}</li></ol><p>在本例中，<code>buyFavoriteSnack(person:vendingMachine:)</code>功能查找给定人最喜欢的零食，并尝试通过调用<code>vend(itemNamed:)</code>方法为他们购买。由于<code>vend(itemNamed:)</code>方法可能会抛出错误，因此在前面用<code>try</code>关键字调用它。</p><p>抛出初始化器可以像抛出函数一样传播错误。例如，以下列表中<code>PurchasedSnack</code>结构的初始化器调用抛出函数作为初始化过程的一部分，并通过将它们传播到调用者来处理遇到的任何错误。</p><ol><li>struct PurchasedSnack {</li><li>​ let name: String</li><li>​ init(name: String, vendingMachine: VendingMachine) throws {</li><li>​ try vendingMachine.vend(itemNamed: name)</li><li>​ self.name = name</li><li>​ }</li><li>}</li></ol><h3 id="使用do-catch处理错误" tabindex="-1"><a class="header-anchor" href="#使用do-catch处理错误" aria-hidden="true">#</a> 使用Do-Catch处理错误</h3><p>您可以使用<code>do</code>-<code>catch</code>语句通过运行代码块来处理错误。如果<code>do</code>子句中的代码抛出错误，它将与<code>catch</code>子句匹配，以确定其中哪一个可以处理错误。</p><p>以下是<code>do</code>-<code>catch</code>声明的一般形式：</p><ol><li>do {</li><li>​ try expression</li><li>​ statements</li><li>} catch pattern 1 {</li><li>​ statements</li><li>} catch pattern 2 where condition {</li><li>​ statements</li><li>} catch pattern 3, pattern 4 where condition {</li><li>​ statements</li><li>} catch {</li><li>​ statements</li><li>}</li></ol>',30),_=e("code",null,"catch",-1),y=e("code",null,"catch",-1),q=e("code",null,"error",-1),S={href:"https://docs.swift.org/swift-book/ReferenceManual/Patterns.html",target:"_blank",rel:"noopener noreferrer"},M=c('<p>例如，以下代码与<code>VendingMachineError</code>枚举的所有三种情况相匹配。</p><ol><li>var vendingMachine = VendingMachine()</li><li>vendingMachine.coinsDeposited = 8</li><li>do {</li><li>​ try buyFavoriteSnack(person: &quot;Alice&quot;, vendingMachine: vendingMachine)</li><li>​ print(&quot;Success! Yum.&quot;)</li><li>} catch VendingMachineError.invalidSelection {</li><li>​ print(&quot;Invalid Selection.&quot;)</li><li>} catch VendingMachineError.outOfStock {</li><li>​ print(&quot;Out of Stock.&quot;)</li><li>} catch VendingMachineError.insufficientFunds(let coinsNeeded) {</li><li>​ print(&quot;Insufficient funds. Please insert an additional (coinsNeeded) coins.&quot;)</li><li>} catch {</li><li>​ print(&quot;Unexpected error: (error).&quot;)</li><li>}</li><li>// Prints &quot;Insufficient funds. Please insert an additional 2 coins.&quot;</li></ol><p>在上面的示例中，<code>buyFavoriteSnack(person:vendingMachine:)</code>函数在<code>try</code>表达式中调用，因为它可能会抛出错误。如果抛出错误，执行将立即转移到<code>catch</code>子句，该子句决定是否允许继续传播。如果没有匹配模式，错误将被最终的<code>catch</code>子句捕获，并绑定到局部<code>error</code>常量。如果没有抛出错误，则执行<code>do</code>语句中的其余语句。</p><p><code>catch</code>子句不必处理<code>do</code>子句中的代码可以抛出的所有可能错误。如果没有一个<code>catch</code>子句处理错误，则错误会传播到周围的范围。然而，传播的错误必须由周围的<em>一些</em>范围处理。在非投掷函数中，封闭的<code>do</code>-<code>catch</code>语句必须处理错误。在抛出函数中，封闭的<code>do</code>-<code>catch</code>语句或调用者必须处理错误。如果错误在没有处理的情况下传播到顶级范围，您将收到一个运行时错误。</p><p>例如，可以写上一个示例，这样任何不是aVendingMachineError的错误都会被调用函数捕获：</p><ol><li>func nourish(with item: String) throws {</li><li>​ do {</li><li>​ try vendingMachine.vend(itemNamed: item)</li><li>​ } catch is VendingMachineError {</li><li>​ print(&quot;Couldn&#39;t buy that from the vending machine.&quot;)</li><li>​ }</li><li>}</li><li></li><li>do {</li><li>​ try nourish(with: &quot;Beet-Flavored Chips&quot;)</li><li>} catch {</li><li>​ print(&quot;Unexpected non-vending-machine-related error: (error)&quot;)</li><li>}</li><li>// Prints &quot;Couldn&#39;t buy that from the vending machine.&quot;</li></ol><p>在<code>nourish(with:)</code>函数中，如果<code>vend(itemNamed:)</code>抛出作为<code>VendingMachineError</code>枚举之一的错误，<code>nourish(with:)</code>通过打印消息来处理错误。否则，<code>nourish(with:)</code>将错误传播到其调用站点。然后，错误被一般<code>catch</code>子句捕获。</p><p>捕获几个相关错误的另一种方法是在<code>catch</code>后列出它们，用逗号分隔。例如：</p><ol><li>func eat(item: String) throws {</li><li>​ do {</li><li>​ try vendingMachine.vend(itemNamed: item)</li><li>​ } catch VendingMachineError.invalidSelection, VendingMachineError.insufficientFunds, VendingMachineError.outOfStock {</li><li>​ print(&quot;Invalid selection, out of stock, or not enough money.&quot;)</li><li>​ }</li><li>}</li></ol><p><code>eat(item:)</code>函数列出了要捕获的自动售货机错误，其错误文本对应于该列表中的项目。如果抛出列出的三个错误中的任何一个，此<code>catch</code>子句通过打印消息来处理它们。任何其他错误都会传播到周围范围内，包括稍后可能会添加的任何自动售货机错误。</p><h3 id="将错误转换为可选值" tabindex="-1"><a class="header-anchor" href="#将错误转换为可选值" aria-hidden="true">#</a> 将错误转换为可选值</h3><p>You use <code>try?</code> to handle an error by converting it to an optional value. If an error is thrown while evaluating the <code>try?</code> expression, the value of the expression is <code>nil</code>. For example, in the following code <code>x</code> and <code>y</code> have the same value and behavior:</p><ol><li>func someThrowingFunction() throws -&gt; Int {</li><li>​ // ...</li><li>}</li><li></li><li>let x = try? someThrowingFunction()</li><li></li><li>let y: Int?</li><li>do {</li><li>​ y = try someThrowingFunction()</li><li>} catch {</li><li>​ y = nil</li><li>}</li></ol><p>如果<code>someThrowingFunction()</code>抛出错误，<code>x</code>和<code>y</code>的值为<code>nil</code>。否则，<code>x</code>和<code>y</code>的值是函数返回的值。请注意，<code>x</code>和<code>y</code>是<code>someThrowingFunction()</code>返回的任何类型的可选。在这里，函数返回一个整数，因此<code>x</code>和<code>y</code>是可选整数。</p><p>使用<code>try?</code>当您想以相同的方式处理所有错误时，允许您编写简洁的错误处理代码。例如，以下代码使用几种方法来获取数据，如果所有方法都失败，则返回<code>nil</code>。</p><ol><li>func fetchData() -&gt; Data? {</li><li>​ if let data = try? fetchDataFromDisk() { return data }</li><li>​ if let data = try? fetchDataFromServer() { return data }</li><li>​ return nil</li><li>}</li></ol><h3 id="禁用错误传播" tabindex="-1"><a class="header-anchor" href="#禁用错误传播" aria-hidden="true">#</a> 禁用错误传播</h3><p>Sometimes you know a throwing function or method won’t, in fact, throw an error at runtime. On those occasions, you can write <code>try!</code> before the expression to disable error propagation and wrap the call in a runtime assertion that no error will be thrown. If an error actually is thrown, you’ll get a runtime error.</p><p>例如，以下代码使用<code>loadImage(atPath:)</code>函数，该函数在给定路径上加载图像资源，如果无法加载图像，则抛出错误。在这种情况下，由于图像随应用程序一起发送，因此在运行时不会抛出错误，因此禁用错误传播是合适的。</p><ol><li>let photo = try! loadImage(atPath: &quot;./Resources/John Appleseed.jpg&quot;)</li></ol><h3 id="指定清理操作" tabindex="-1"><a class="header-anchor" href="#指定清理操作" aria-hidden="true">#</a> 指定清理操作</h3><p>在代码执行离开当前代码块之前，您可以使用<code>defer</code>语句执行一组语句。此语句允许您进行任何必要的清理，无论执行<em>如何</em>离开当前代码块，无论是因为抛出错误还是因为<code>return</code>或<code>break</code>等语句而离开。例如，您可以使用<code>defer</code>语句来确保文件描述符关闭并释放手动分配的内存。</p><p><code>defer</code>语句会推迟执行，直到当前范围退出。此语句由<code>defer</code>关键字和稍后要执行的语句组成。延迟语句不得包含任何将控制权从语句中转移出去的代码，例如<code>break</code>或a areturn语句，或通过抛出错误。延迟操作的执行顺序与源代码中写入的顺序相反。也就是说，第一个<code>defer</code>语句中的代码最后执行，第二个<code>defer</code>语句中的代码执行秒到最后，以此类推。源代码顺序的最后一个<code>defer</code>语句首先执行。</p><ol><li>func processFile(filename: String) throws {</li><li>​ if exists(filename) {</li><li>​ let file = open(filename)</li><li>​ defer {</li><li>​ close(file)</li><li>​ }</li><li>​ while let line = try file.readline() {</li><li>​ // Work with the file.</li><li>​ }</li><li>​ // close(file) is called here, at the end of the scope.</li><li>​ }</li><li>}</li></ol><p>上面的示例使用<code>defer</code>语句来确保<code>open(_:)</code>函数具有相应的调用 <code>close(_:)</code></p><p>注意</p><p>即使不涉及错误处理代码，您也可以使用<code>defer</code>语句。</p>',27);function b(k,x){const o=l("ExternalLinkIcon");return d(),r("div",null,[h,s,u,p,f,m,e("p",null,[i("Swift中的错误处理与Cocoa和Objective-C中使用"),g,i("类的错误处理模式互操作。有关本课程的更多信息，请参阅在"),e("a",w,[i("Swift中处理可可错误"),t(o)]),i("。")]),v,e("p",null,[i("您在"),_,i("后编写一个模式，以指示该子句可以处理哪些错误。如果"),y,i("子句没有模式，该子句将匹配任何错误，并将错误绑定到名为"),q,i("的本地常量。有关模式匹配的更多信息，请参阅"),e("a",S,[i("模式"),t(o)]),i("。")]),M])}const V=n(a,[["render",b],["__file","26.swift-error-handling.html.vue"]]);export{V as default};
