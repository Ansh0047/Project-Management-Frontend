import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react'

const tags = [
    "all", "react", "nextjs", "spring boot", "mysql", "mongodb", "python", "django", "flask", "angular",
]

const ProjectList = () => {
    const handleFilterChange = (section, value) => {
        console.log("value", value, section);
    };

    return (
        <>
            <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
                <section className='filterSection'>
                    Filter Section

                    <Card className="p-5 sticky top-10">

                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-xl -tracking-wider'>filters</p>

                            <Button variant="ghost" size="icon">

                                <MixerHorizontalIcon />

                            </Button>
                        </div>

                        <CardContent className="mt-5">
                            <ScrollArea className='space-y-7 h-[70vh]'>
                                <div>
                                    <h1 className='pb-3 text-gray-400 border-b'>Category</h1>
                                    <div className='pt-5'>
                                        <RadioGroup className="space-y-3 pt-5" defaultValue='all' onValueChange={(value) => handleFilterChange("category", value)}>
                                            <div className='flex items-center gap-2'>
                                                <RadioGroupItem value="all" id="r1" />
                                                <Label htmlFor="r1">all</Label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <RadioGroupItem value="fullstack" id="r2" />
                                                <Label htmlFor="r1">fullstack</Label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <RadioGroupItem value="frontend" id="r3" />
                                                <Label htmlFor="r1">frontend</Label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <RadioGroupItem value="backend" id="r4" />
                                                <Label htmlFor="r1">backend</Label>
                                            </div>
                                        </RadioGroup>

                                    </div>
                                </div>

                                <div className='pt-9'>
                                    <h1 className='pb-3 text-gray-400 border-b'>Tag</h1>
                                    <div className='pt-5'>
                                        <RadioGroup className="space-y-3 pt-5" defaultValue='all' onValueChange={(value) => handleFilterChange("tag", value)}>
                                            {tags.map((item) => <div key={item} className='flex items-center gap-2'>
                                                <RadioGroupItem value={item} id={`r1-${item}`} />
                                                <Label htmlFor="r1">{item}</Label>
                                            </div>)}
                                        </RadioGroup>

                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>

                    </Card>
                </section>

                <section className='projectListSection w-full lg:w-[48rem]'>
                    Project List Section
                </section>
            </div>
        </>
    );
}

export default ProjectList