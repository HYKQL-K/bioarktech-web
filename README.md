# BioArk Tech 主页

这是模拟 BioArk Tech 公司的官方主页，使用 Next.js 16 构建，包含产品展示、基因编辑服务和公司介绍等功能。

## 架构思路

### 技术栈
- **框架**: Next.js 16 (React 18) with TypeScript
- **样式**: Tailwind CSS
- **轮播组件**: Swiper.js
- **图标**: lucide-react
- **代码规范**: ESLint

### 项目结构
```
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # 全局布局
│   │   ├── page.tsx        # 主页
│   │   ├── admin/          # 管理面板页面
│   │   │   └── page.tsx    # 管理面板入口
│   │   └── globals.css     # 全局样式
│   ├── components/         # React 组件
│   │   ├── FeaturedProductsCarousel.tsx  # 精选产品轮播
│   │   ├── GeneEditingSection.tsx        # 基因编辑产品展示
│   │   ├── ServicesSection.tsx           # 服务展示
│   │   ├── Admin.tsx                     # 管理面板组件
│   │   └── ProductDetail.tsx             # 产品详情页组件
│   ├── context/            # React Context 管理
│   │   └── StoreContext.tsx              # 全局数据存储和管理
│   ├── lib/                # 工具函数和数据
│   │   └── mockData.ts     # 模拟数据
│   └── types/              # TypeScript 类型定义
│       └── index.ts        # 产品和服务类型
├── public/                 # 静态资源
└── package.json            # 项目依赖
```

### 核心功能

1. **精选产品轮播**
   - 使用 Swiper.js 实现响应式轮播
   - 桌面端显示 4 个产品，平板端显示 2 个，移动端显示 1 个
   - 支持左右箭头导航
   - 产品显示根据 `isFeatured` 属性过滤

2. **基因编辑产品展示**
   - 根据产品的 `showInGeneEditing` 属性过滤显示
   - 只显示标记为在基因编辑部分展示的产品

3. **服务展示**
   - 根据服务的 `showInServiceSection` 属性过滤显示
   - 只显示标记为在服务部分展示的服务

4. **产品详情页**
   - 支持产品规格选择（0.1 mL, 0.5 mL, 1.0 mL, 6 x 1.0 mL）
   - 选择不同规格时自动更新价格、产品编号和库存状态
   - 支持将当前选择的产品规格加入购物车

5. **管理面板 (CMS)**
   - 路由地址：`/admin`
   - 产品管理：
     - 查看所有产品列表
     - 编辑产品信息（名称、描述、图片、分类）
     - 添加新产品
     - 删除现有产品
     - 管理产品变体（规格、SKU、价格、库存状态）
     - 控制产品可见性（首页轮播、基因编辑部分、试剂部分）
   - 服务管理：
     - 切换服务是否在服务部分展示（`showInServiceSection`）
   - 实时更新：修改后立即反映在前端，无需重启服务器
   - 数据持久化：所有修改自动保存到 LocalStorage，刷新后仍然保留

6. **数据持久化**
   - 使用 React Context + LocalStorage 实现模拟后端
   - 数据在浏览器刷新后仍然保留
   - 支持产品和服务数据的 CRUD 操作

7. **产品详情页**
   - 图片画廊：主图展示和缩略图切换
   - 状态标签：显示产品分类和库存状态
   - 规格选择器：切换不同产品变体（0.1 mL, 0.5 mL, 1.0 mL, 6 x 1.0 mL）
   - 实时更新：选择不同规格时自动更新价格、产品编号和库存状态
   - 购物车功能：支持将当前选择的产品变体加入购物车

8. **未来扩展**
   - 产品类型中包含 `showInReagent` 属性，用于未来试剂部分的展示
   - 目前该属性默认值为 false，且在 CMS 中是禁用状态
   - 可以扩展为使用真实后端 API 和数据库

## 启动方法

### 环境要求
- Node.js 版本 >= 20.9.0
- npm 或 yarn 包管理器

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

### 访问地址
- 开发环境: http://localhost:3000
- 管理面板: http://localhost:3000/admin
- 生产环境: 根据部署配置而定

## 部署

推荐使用 Vercel 部署 Next.js 应用，具体步骤：
1. 安装 Vercel CLI: `npm install -g vercel`
2. 登录 Vercel 账号: `vercel login`
3. 部署应用: `vercel`

详细部署文档请参考: https://nextjs.org/docs/app/building-your-application/deploying

## 功能实现总结

**1. 优化"精选产品"设计**
* **目标**: 提高视觉吸引力和卡片对齐度。
* **实现**: 用**动态React轮播**替换静态列表。应用特定的Tailwind类（`h-full`, `flex-col`, `mt-auto`）确保所有产品卡片高度一致，按钮完美对齐在底部。

**2. 高产品量的可扩展性**
* **目标**: 在不混乱主页的情况下容纳不断增长的库存。
* **实现**: **轮播架构**允许主页在紧凑的水平空间中显示无限数量的精选项目。用户通过交互式左右箭头控件导航。

**3. "基因编辑"部分可见性控制**
* **目标**: 允许管理员选择哪些产品出现在基因编辑网格中。
* **实现**: 在产品数据 schema 中添加 `showInGeneEditing` 布尔标志。前端专门过滤产品列表（`products.filter(p => p.showInGeneEditing)`）来渲染此部分。

**4. "服务"部分可见性控制**
* **目标**: 允许管理员选择哪些服务出现在主页上。
* **实现**: 添加 `showInServiceSection` 布尔标志。布局使用 `justify-center` 确保无论有3个还是5个服务，它们都保持完美居中且平衡。

**5. "试剂"部分占位符（灰色显示）**
* **目标**: 为未来类别保留空间但防止当前使用。
* **实现**: 为了面向未来，已在数据库中添加 `showInReagent` 字段。然而，在**管理面板**中，复选框输入明确设置为 `disabled={true}`，使其呈现灰色且不可点击，符合要求。
