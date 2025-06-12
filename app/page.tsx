import { CalendarDays, Home, ListTodo, ShoppingBag, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F0]">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-[#FFD6E0] px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-[#6B4F4F]">おうちマネージャー</h1>
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-[#FFC8DD] p-1">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="アバター"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="mb-8 rounded-3xl bg-[#FFEBF0] p-6 shadow-lg">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#6B4F4F]">こんにちは、ユーザーさん！</h2>
              <p className="text-[#6B4F4F]">今日も素敵な一日を過ごしましょう！</p>
            </div>
            <img src="/placeholder.svg?height=80&width=80" alt="キャラクター" className="h-20 w-20" />
          </div>
          <Card className="border-2 border-[#FFC8DD]">
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-bold text-[#6B4F4F]">今月の予算</h3>
                <span className="text-sm font-medium text-[#6B4F4F]">¥45,000 / ¥80,000</span>
              </div>
              <Progress value={56} className="h-3 bg-[#FFEBF0]" indicatorClassName="bg-[#FFC8DD]" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#FFEBF0]">
            <TabsTrigger value="home" className="data-[state=active]:bg-[#FFC8DD] data-[state=active]:text-[#6B4F4F]">
              <Home className="h-5 w-5" />
            </TabsTrigger>
            <TabsTrigger value="tasks" className="data-[state=active]:bg-[#FFC8DD] data-[state=active]:text-[#6B4F4F]">
              <ListTodo className="h-5 w-5" />
            </TabsTrigger>
            <TabsTrigger
              value="expenses"
              className="data-[state=active]:bg-[#FFC8DD] data-[state=active]:text-[#6B4F4F]"
            >
              <Wallet className="h-5 w-5" />
            </TabsTrigger>
            <TabsTrigger
              value="shopping"
              className="data-[state=active]:bg-[#FFC8DD] data-[state=active]:text-[#6B4F4F]"
            >
              <ShoppingBag className="h-5 w-5" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4">
            <div className="grid gap-4">
              <Card className="border-2 border-[#FFC8DD] overflow-hidden">
                <div className="bg-[#FFC8DD] px-4 py-2">
                  <h3 className="font-bold text-[#6B4F4F]">今日のスケジュール</h3>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 rounded-lg bg-[#FFEBF0] p-3">
                    <CalendarDays className="h-8 w-8 text-[#FF8FAB]" />
                    <div>
                      <p className="font-medium text-[#6B4F4F]">お買い物</p>
                      <p className="text-sm text-[#6B4F4F]">15:00 - スーパーマーケット</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#FFC8DD] overflow-hidden">
                <div className="bg-[#FFC8DD] px-4 py-2">
                  <h3 className="font-bold text-[#6B4F4F]">最近の支出</h3>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-[#FFEBF0] p-2">
                          <ShoppingBag className="h-5 w-5 text-[#FF8FAB]" />
                        </div>
                        <span className="text-[#6B4F4F]">スーパー</span>
                      </div>
                      <span className="font-medium text-[#6B4F4F]">¥3,500</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-[#FFEBF0] p-2">
                          <Home className="h-5 w-5 text-[#FF8FAB]" />
                        </div>
                        <span className="text-[#6B4F4F]">家賃</span>
                      </div>
                      <span className="font-medium text-[#6B4F4F]">¥65,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tasks" className="mt-4">
            <Card className="border-2 border-[#FFC8DD] overflow-hidden">
              <div className="bg-[#FFC8DD] px-4 py-2">
                <h3 className="font-bold text-[#6B4F4F]">タスクリスト</h3>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="task1"
                      className="h-5 w-5 rounded-full border-2 border-[#FFC8DD] text-[#FF8FAB] focus:ring-[#FF8FAB]"
                    />
                    <label htmlFor="task1" className="text-[#6B4F4F]">
                      洗濯をする
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="task2"
                      className="h-5 w-5 rounded-full border-2 border-[#FFC8DD] text-[#FF8FAB] focus:ring-[#FF8FAB]"
                    />
                    <label htmlFor="task2" className="text-[#6B4F4F]">
                      部屋の掃除
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="task3"
                      className="h-5 w-5 rounded-full border-2 border-[#FFC8DD] text-[#FF8FAB] focus:ring-[#FF8FAB]"
                    />
                    <label htmlFor="task3" className="text-[#6B4F4F]">
                      ゴミ出し
                    </label>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-[#FF8FAB] text-white hover:bg-[#FF6B9E]">新しいタスクを追加</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="expenses" className="mt-4">
            <Card className="border-2 border-[#FFC8DD] overflow-hidden">
              <div className="bg-[#FFC8DD] px-4 py-2">
                <h3 className="font-bold text-[#6B4F4F]">支出カテゴリー</h3>
              </div>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#6B4F4F]">食費</span>
                      <span className="text-sm text-[#6B4F4F]">¥25,000 / ¥30,000</span>
                    </div>
                    <Progress value={83} className="h-3 bg-[#FFEBF0]" indicatorClassName="bg-[#FF8FAB]" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#6B4F4F]">光熱費</span>
                      <span className="text-sm text-[#6B4F4F]">¥8,000 / ¥15,000</span>
                    </div>
                    <Progress value={53} className="h-3 bg-[#FFEBF0]" indicatorClassName="bg-[#FF8FAB]" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#6B4F4F]">娯楽費</span>
                      <span className="text-sm text-[#6B4F4F]">¥12,000 / ¥20,000</span>
                    </div>
                    <Progress value={60} className="h-3 bg-[#FFEBF0]" indicatorClassName="bg-[#FF8FAB]" />
                  </div>
                </div>
                <Button className="mt-4 w-full bg-[#FF8FAB] text-white hover:bg-[#FF6B9E]">支出を記録する</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="shopping" className="mt-4">
            <Card className="border-2 border-[#FFC8DD] overflow-hidden">
              <div className="bg-[#FFC8DD] px-4 py-2">
                <h3 className="font-bold text-[#6B4F4F]">買い物リスト</h3>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="item1"
                      className="h-5 w-5 rounded-full border-2 border-[#FFC8DD] text-[#FF8FAB] focus:ring-[#FF8FAB]"
                    />
                    <label htmlFor="item1" className="text-[#6B4F4F]">
                      牛乳
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="item2"
                      className="h-5 w-5 rounded-full border-2 border-[#FFC8DD] text-[#FF8FAB] focus:ring-[#FF8FAB]"
                    />
                    <label htmlFor="item2" className="text-[#6B4F4F]">
                      パン
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="item3"
                      className="h-5 w-5 rounded-full border-2 border-[#FFC8DD] text-[#FF8FAB] focus:ring-[#FF8FAB]"
                    />
                    <label htmlFor="item3" className="text-[#6B4F4F]">
                      洗剤
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="新しいアイテム"
                    className="flex-1 rounded-lg border-2 border-[#FFC8DD] px-3 py-2 focus:border-[#FF8FAB] focus:outline-none"
                  />
                  <Button className="bg-[#FF8FAB] text-white hover:bg-[#FF6B9E]">追加</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-[#FFD6E0] p-4 text-center text-sm text-[#6B4F4F]">おうちマネージャー © 2025</footer>
    </div>
  )
}
