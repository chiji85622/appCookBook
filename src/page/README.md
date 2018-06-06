root:根页面
  win：主进程，负责后运行

4号
cookBook：食谱书页面
  win:主进程
  frameMain：主窗口-显示食谱列表
  frameSearchButton：进入搜索页------与menu.frameAddButton可以共用

4号
menu：菜单页面
  win：主进程
  frameMain：主窗口-显示今日菜单列表
  frameAddButton：进去搜索页------与cookBook.frameSearchButton可以共用
  frameCalendar：日历选择

5号
recipes：食谱页
  win：主进程------打开frameGroup显示
  frameMain：食谱首页
  frameStep：食谱步骤页--编辑与展示整合--有编辑模式和非编辑模式
  frameToolButton：食谱工具按钮，加入今日菜单，烹饪，编辑
  frameEditPhotos：照片编辑--主要是更换，包含展示照片，与描述照片
  frameEditFood：食材编辑--分量的编辑，删除（分量为0==删除）
  frameEditDescribe：描述文字类的编辑（文本的编辑没文字==删除）
  frameEditTimer：计时器的编辑（二阶段提供智能计算）

5号
develop：食谱创建or研发
  win：主进程
  frameMain：研发列表
  frameAddButton：创建新的研发食谱
  frameNameInput：食谱名输入
  frameNameSearch：食谱名检测是是否已经存在，二从下厨房获得同名食谱
  frameFood：食材汇总--如果是网络食谱则显示-原创则直接跳过
  frameStep：食谱步骤  

6号
search：搜索页面
  win：主进程
  frameMain：主窗口--显示搜索结果
  frameHistory：搜索历史
  frameInput：搜索输入

6号
navigation：导航页
  win：主进程
  frameMain：主窗口-UI

6号
opinion：意见箱页
  win：主进程
  frameMain：主窗口UI

6号
setting：设置页
  win：主进程
  frameMain：主窗口   

4号到6号ui为主
  